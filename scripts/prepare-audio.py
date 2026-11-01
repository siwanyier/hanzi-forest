"""Build the fixed pronunciation assets. Inputs are restricted to public dictionary words in public-vocabulary.json.
Sources: Youdao public pronunciation endpoint (le=zh), Google Mandarin TTS fallback.
Only the fixed, public vocabulary whitelist is transmitted; no runtime third-party calls.
"""
import json,subprocess,pathlib,hashlib,urllib.request,urllib.parse,concurrent.futures,time
root=pathlib.Path(__file__).resolve().parents[1]
# This file contains 179 ordinary, public dictionary terms only.
# Never read or transmit sentences, stories, child names, parent edits, or user records.
texts=set(json.loads((root/'scripts/public-vocabulary.json').read_text()))
assert len(texts)==179 and all(1<len(w)<5 and all('\u3400'<=c<='\u9fff' for c in w) for w in texts)
assert all('@' not in w and 'http' not in w for w in texts)
output=root/'dist/audio';output.mkdir(exist_ok=True)
def fetch(text):
 name=hashlib.sha256(text.encode()).hexdigest()[:20]+'.mp3';p=output/name
 if p.exists() and p.stat().st_size>500:return text,{'src':'audio/'+name}
 url='https://dict.youdao.com/dictvoice?'+urllib.parse.urlencode({'le':'zh','audio':text})
 for attempt in range(3):
  if attempt==1:url+='&type=2'
  if attempt==2:url='https://translate.google.com/translate_tts?'+urllib.parse.urlencode({'ie':'UTF-8','client':'tw-ob','tl':'zh-CN','q':text})
  try:
   with urllib.request.urlopen(url,timeout=25) as r:
    raw=r.read()
    if 'audio' not in r.headers.get('Content-Type','') or len(raw)<500:raise ValueError('not audio')
   p.write_bytes(raw);return text,{'src':'audio/'+name}
  except Exception as ex:
   if attempt==2: return text,{'error':type(ex).__name__+': '+str(ex)}
   time.sleep(.4)
manifest=json.loads((output/'manifest.json').read_text()) if (output/'manifest.json').exists() else {};errors=[]
with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
 for i,(text,result) in enumerate(pool.map(fetch,sorted(texts)),1):
  if 'error' in result:errors.append((text,result['error']))
  else:manifest[text]=result
  if i%40==0:print(f'Prepared {i}/{len(texts)} clips',flush=True)
(output/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False),encoding='utf8')
(root/'dist/audio-manifest.js').write_text('const FIXED_AUDIO = '+json.dumps(manifest,ensure_ascii=False)+';\n',encoding='utf8')
print(json.dumps({'clips':len(manifest),'requested':len(texts),'failed':errors,'bytes':sum(p.stat().st_size for p in output.glob('*.mp3'))},ensure_ascii=False),flush=True)
if errors:raise SystemExit(1)
