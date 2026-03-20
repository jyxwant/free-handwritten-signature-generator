import os
import re

ADSENSE_TAG = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6903593415712702" crossorigin="anonymous"></script>'

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    if 'ca-pub-6903593415712702' in content:
        print(f'  SKIP: {filepath}')
        return
    match = re.search(r'(<head[^>]*>)', content, re.IGNORECASE)
    if match:
        pos = match.end()
        content = content[:pos] + '\n' + ADSENSE_TAG + content[pos:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'  ADDED: {filepath}')
    else:
        print(f'  NO <head>: {filepath}')

count = 0
for dirpath, dirnames, filenames in os.walk('.'):
    dirnames[:] = [d for d in dirnames if not d.startswith('.') and d not in ('node_modules', 'dist')]
    for f in filenames:
        if f.endswith('.html'):
            process_file(os.path.join(dirpath, f))
            count += 1
print(f'\nDone. Processed {count} HTML files.')
