import json
import re
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding='utf-8')

corpus_dir = Path('scratch/japanese-corpus')
JAPANESE = re.compile(r'[\u3040-\u30ff\u3400-\u9fff]')

flagged_pages = []

for s in ['shinkanzen-n2-bunpo', 'shinkanzen-n2-chokai', 'shinkanzen-n2-dokkai', 'shinkanzen-n2-goi', 'shinkanzen-n2-kanji']:
    for p in sorted((corpus_dir / s).glob('page-*.json')):
        d = json.loads(p.read_text(encoding='utf-8'))
        p_num = d['page']
        t = d.get('text', '')
        c = len(t)
        jp = len(JAPANESE.findall(t))
        r = (jp / c * 100) if c > 0 else 0
        conf = d.get('confidence')
        low_conf = d.get('lowConfidence', False)
        
        reasons = []
        if c == 0:
            reasons.append('EMPTY_CHARS')
        elif c < 50:
            reasons.append('VERY_SHORT_TEXT')
            
        if c > 100 and r < 10.0:
            reasons.append('LOW_JP_RATIO')
            
        if conf is not None and conf < 60.0:
            reasons.append('LOW_CONFIDENCE_SCORE')
            
        if low_conf:
            reasons.append('FLAGGED_LOW_CONF')
            
        if reasons:
            flagged_pages.append({
                'source': s,
                'page': p_num,
                'chars': c,
                'jp': jp,
                'ratio': round(r, 1),
                'conf': conf,
                'reasons': reasons,
                'snippet': t[:60].replace('\n', ' ')
            })

print(f"Total flagged pages: {len(flagged_pages)}")
for fp in flagged_pages:
    print(f"{fp['source']} p{fp['page']}: {fp['reasons']} | c={fp['chars']}, jp={fp['jp']}, r={fp['ratio']}%, conf={fp['conf']} | snip: {fp['snippet']}")
