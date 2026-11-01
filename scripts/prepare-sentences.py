"""Generate audio for authored, fictional teaching sentences and common dictionary words.
No user records, parent edits, child names, contacts or personal history are read.
Inputs are the reviewed animal-story corpus in teaching-sentences.json.
"""
import pathlib,json,hashlib,urllib.parse,urllib.request,concurrent.futures,time
root=pathlib.Path(__file__).resolve().parents[1]
texts=json.loads((root/'scripts/teaching-sentences.json').read_text())
assert all(isinstance(t,str) and 1<len(t)<180 for t in texts)
assert all(not any(x in t for x in ['@','http']) for t in texts)
assert all(not any(x in t for x in ['爸爸','妈妈']) or t.startswith('“爸爸”这个词') or t.startswith('“妈妈”这个词') for t in texts)
output=root/'dist/audio';errors=[];manifest=json.loads((output/'manifest.json').read_text())
def fetch(text):
 name=hashlib.sha256(text.encode()).hexdigest()[:20]+'.mp3';path=output/name
 if path.exists() and path.stat().st_size>500:return text,{'src':'audio/'+name}
 url='https://translate.google.com/translate_tts?'+urllib.parse.urlencode({'ie':'UTF-8','client':'tw-ob','tl':'zh-CN','q':text})
 for attempt in range(2):
  try:
   with urllib.request.urlopen(url,timeout=20) as r:
    raw=r.read();assert 'audio' in r.headers.get('Content-Type','') and len(raw)>500
   path.write_bytes(raw);return text,{'src':'audio/'+name}
  except Exception as e:
   if attempt:return text,{'error':type(e).__name__+': '+str(e)}
   time.sleep(.5)
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
 for i,(text,result) in enumerate(pool.map(fetch,texts),1):
  if 'error' in result:errors.append((text,result['error']))
  else:manifest[text]=result
  if i%30==0:print(f'Sentence clips: {i}/{len(texts)}',flush=True)
(output/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False))
(root/'dist/audio-manifest.js').write_text('const FIXED_AUDIO = '+json.dumps(manifest,ensure_ascii=False)+';\n')
print(json.dumps({'sentenceClips':len(texts)-len(errors),'totalClips':len(manifest),'failed':errors},ensure_ascii=False),flush=True)
if errors:raise SystemExit(1)
