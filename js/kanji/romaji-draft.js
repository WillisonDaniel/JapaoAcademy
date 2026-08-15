// Conversor determinístico para rascunhos editoriais Kanji.
// A saída é sempre pendente de revisão humana; este helper não certifica japonês natural.
(function (global) {
    'use strict';

    const kana = Object.fromEntries((
        'kya=きゃ,kyu=きゅ,kyo=きょ,sha=しゃ,shu=しゅ,sho=しょ,cha=ちゃ,chu=ちゅ,cho=ちょ,' +
        'nya=にゃ,nyu=にゅ,nyo=にょ,hya=ひゃ,hyu=ひゅ,hyo=ひょ,mya=みゃ,myu=みゅ,myo=みょ,' +
        'rya=りゃ,ryu=りゅ,ryo=りょ,gya=ぎゃ,gyu=ぎゅ,gyo=ぎょ,ja=じゃ,ju=じゅ,jo=じょ,' +
        'bya=びゃ,byu=びゅ,byo=びょ,pya=ぴゃ,pyu=ぴゅ,pyo=ぴょ,fa=ふぁ,fi=ふぃ,fe=ふぇ,fo=ふぉ,' +
        'she=しぇ,je=じぇ,che=ちぇ,ti=てぃ,di=でぃ,tsa=つぁ,tsi=つぃ,tse=つぇ,tso=つぉ,' +
        'ka=か,ki=き,ku=く,ke=け,ko=こ,sa=さ,shi=し,su=す,se=せ,so=そ,' +
        'ta=た,chi=ち,tsu=つ,te=て,to=と,na=な,ni=に,nu=ぬ,ne=ね,no=の,' +
        'ha=は,hi=ひ,fu=ふ,he=へ,ho=ほ,ma=ま,mi=み,mu=む,me=め,mo=も,' +
        'ya=や,yu=ゆ,yo=よ,ra=ら,ri=り,ru=る,re=れ,ro=ろ,wa=わ,wo=を,' +
        'ga=が,gi=ぎ,gu=ぐ,ge=げ,go=ご,za=ざ,ji=じ,zu=ず,ze=ぜ,zo=ぞ,' +
        'da=だ,de=で,do=ど,ba=ば,bi=び,bu=ぶ,be=べ,bo=ぼ,pa=ぱ,pi=ぴ,pu=ぷ,pe=ぺ,po=ぽ,' +
        'a=あ,i=い,u=う,e=え,o=お'
    ).split(',').map(pair => pair.split('=')));
    const kanaKeys = Object.keys(kana).sort((a, b) => b.length - a.length);
    const verbEndings = [
        ['ru', 'ri', 'り'], ['u', 'i', 'い'], ['ku', 'ki', 'き'], ['gu', 'gi', 'ぎ'],
        ['su', 'shi', 'し'], ['tsu', 'chi', 'ち'], ['nu', 'ni', 'に'], ['bu', 'bi', 'び'], ['mu', 'mi', 'み']
    ];

    function normalize(value) {
        return String(value || '').toLowerCase().normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/ū/g, 'uu').replace(/ō/g, 'ou').replace(/ā/g, 'aa').replace(/ī/g, 'ii').replace(/ē/g, 'ee');
    }

    function word(rawWord, replacements) {
        const lower = normalize(rawWord);
        if (replacements[lower]) return replacements[lower];
        let result = '';
        let index = 0;
        while (index < lower.length) {
            const current = lower[index];
            const next = lower[index + 1] || '';
            if (/[^a-z]/.test(current)) { result += current; index++; continue; }
            if (current !== 'n' && current === next && /[bcdfghjklmpqrstvwxyz]/.test(current)) {
                result += 'っ'; index++; continue;
            }
            if (current === 'n' && (!next || /[bcdfghjklmpqrstvwxyz]/.test(next))) {
                result += 'ん'; index++; continue;
            }
            const key = kanaKeys.find(candidate => lower.startsWith(candidate, index));
            if (key) { result += kana[key]; index += key.length; }
            else { result += current; index++; }
        }
        if (/[a-z]/.test(result)) {
            const fallbackKana = {
                b: 'ブ', c: 'ク', d: 'ド', f: 'フ', g: 'グ', h: 'フ', j: 'ジ', k: 'ク', l: 'ル',
                m: 'ム', n: 'ン', p: 'プ', q: 'ク', r: 'ル', s: 'ス', t: 'ト', v: 'ヴ', w: 'ウ', x: 'クス', y: 'イ', z: 'ズ'
            };
            result = result.replace(/[a-z]/g, letter => fallbackKana[letter] || letter);
        }
        return result;
    }

    function targetData(example) {
        const raw = String(example.word || '').trim();
        const match = raw.match(/^(.+?)\s*[（(]([^）)]+)[）)]\s*$/);
        return match
            ? { japanese: match[1].trim(), reading: match[2].trim().toLowerCase() }
            : { japanese: raw, reading: '' };
    }

    function replaceTarget(sentence, japaneseWord, reading) {
        if (!reading || !japaneseWord) return { text: sentence, replaced: false };
        const cleanReading = reading.split(/[\s/・]/)[0].replace(/[^a-z'-]/g, '');
        const japaneseStem = japaneseWord.replace(/[るうくぐすつぬぶむ]$/, '');
        const candidates = [[cleanReading, japaneseWord]];
        verbEndings.forEach(([ending, politeEnding, kanaEnding]) => {
            if (!cleanReading.endsWith(ending)) return;
            const stem = cleanReading.slice(0, -ending.length);
            candidates.push([`${stem}${politeEnding}`, `${japaneseStem}${kanaEnding}`]);
            if (ending === 'ru') candidates.push([stem, japaneseStem]);
        });
        if (cleanReading.endsWith('i')) {
            const stem = cleanReading.slice(0, -1);
            candidates.push([`${stem}ku`, `${japaneseStem}く`], [`${stem}katta`, `${japaneseStem}かった`]);
        }
        candidates.sort((a, b) => b[0].length - a[0].length);
        for (const [source, target] of candidates) {
            const escaped = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const pattern = new RegExp(`\\b${escaped}`, 'i');
            if (pattern.test(sentence)) return { text: sentence.replace(pattern, target), replaced: true };
        }
        return { text: sentence, replaced: false };
    }

    function sentence(rawSentence, example, replacements) {
        const { japanese, reading } = targetData(example || {});
        const target = replaceTarget(String(rawSentence || ''), japanese, reading);
        let converted = target.text.replace(/[A-Za-z][A-Za-z'-]*/g, token => word(token, replacements));
        converted = converted.replace(/,/g, '、').replace(/\./g, '。').replace(/!/g, '！').replace(/\?/g, '？')
            .replace(/-/g, '').replace(/\s+([、。！？])/g, '$1')
            .replace(/([ぁ-んァ-ヶ一-龯])\s+(?=[ぁ-んァ-ヶ一-龯])/g, '$1');
        return { text: converted.trim(), targetReplaced: target.replaced };
    }

    function apply(dataset, options) {
        const replacements = Object.assign({ wa: 'は', o: 'を', e: 'へ' }, options.replacements || {});
        dataset.forEach(module => {
            module.editorialReview = { status: 'pending-human-review', phase: String(options.phase) };
            if (module.grammar && module.grammar.example && !module.isReviewTable) {
                const text = sentence(module.grammar.example, {}, replacements).text;
                module.grammar.content = {
                    displayText: text, audioText: text, furigana: '', romaji: module.grammar.example,
                    translation: module.grammar.translation || '', scenario: ''
                };
            }
            (module.kanjis || []).forEach(kanji => (kanji.examples || []).forEach(example => {
                const converted = sentence(example.sentence, example, replacements);
                example.content = {
                    displayText: converted.text, audioText: converted.text, furigana: '', romaji: example.sentence || '',
                    translation: example.sentenceMeaning || '', scenario: ''
                };
                example.editorialReview = {
                    status: 'pending-human-review', phase: String(options.phase),
                    targetReplaced: converted.targetReplaced || converted.text.includes(kanji.character || kanji.kanji || '')
                };
            }));
        });
        (options.overrides || []).forEach(([moduleIndex, kanjiIndex, exampleIndex, text]) => {
            const example = dataset[moduleIndex].kanjis[kanjiIndex].examples[exampleIndex];
            example.content.displayText = text;
            example.content.audioText = text;
            example.editorialReview.targetReplaced = true;
        });
    }

    global.KanjiRomajiDraft = Object.freeze({ apply, sentence, word });
}(window));
