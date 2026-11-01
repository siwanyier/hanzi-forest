const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const element={innerHTML:'',style:{},children:[],focus(){},scrollIntoView(){}};
let utterances=[],clips=[];
class Clip{constructor(src){this.src=src;this.paused=false;this.dataset={};clips.push(this)}play(){return Promise.resolve()}pause(){this.paused=true}remove(){}}
class Utterance{constructor(text){this.text=text}}
const voices=[{voiceURI:'hk',name:'粤语',lang:'zh-HK'},{voiceURI:'basic',name:'普通话',lang:'zh-CN'},{voiceURI:'premium',name:'Tingting Enhanced',lang:'zh-CN'},{voiceURI:'tw',name:'台湾',lang:'zh-TW'}];
const synth={getVoices(){return voices},cancel(){},speak(u){utterances.push(u)},addEventListener(){}};
const c={Date,Intl,Set,Math,JSON,Blob,console,setTimeout,clearTimeout,Audio:Clip,SpeechSynthesisUtterance:Utterance,speechSynthesis:synth,localStorage:{getItem(){return null},setItem(){}},document:{addEventListener(){},querySelector(){return element},querySelectorAll(){return []},body:{style:{},append(){}}},window:{speechSynthesis:synth,addEventListener(){}}};vm.createContext(c);
for(const file of ['data.js','expansion.js','audio-manifest.js','visuals.js','app.js'])vm.runInContext(fs.readFileSync('dist/'+file,'utf8').replace(/\nrender\(\);\s*$/,''),c);
const run=s=>vm.runInContext(s,c);
assert.equal(run("BASE.every(x=>!!FIXED_AUDIO[x.word])"),true,'every built-in word has fixed audio');
assert.equal(run("Object.keys(FIXED_AUDIO).every(x=>typeof x==='string'&&x.length>0&&!x.includes('@')&&!x.includes('http'))"),true,'fixed corpus contains teaching text rather than contact links');
assert.equal(run("BASE.every(x=>!!FIXED_AUDIO[x.sentence])"),true,'every authored sentence has fixed audio');
assert.equal(run("STORIES.every(x=>!!FIXED_AUDIO[x.lines.join('')]&&x.lines.every(line=>!!FIXED_AUDIO[line]))"),true,'stories have line and whole-story audio');
assert.equal(run("selectMandarin(speechSynthesis.getVoices(),'').voiceURI"),'premium');
assert.equal(run("selectMandarin([{lang:'zh-HK',voiceURI:'hk'}],'')"),null,'no Cantonese auto-selection');
run("speak('大海')");assert.equal(clips.length,1);assert.equal(utterances.length,0,'built-in word does not use system voice');assert.equal(clips[0].playbackRate,1);assert.equal(clips[0].preservesPitch,true);
run("speak('贝壳')");assert.equal(clips[0].paused,true,'new play stops previous clip');
run("speak('小鱼在水里游。')");assert.equal(clips.length,3);assert.equal(utterances.length,0,'authored sentences bypass device speech');
run("speak('测试用户看着月亮。')");assert.equal(utterances.at(-1).text,'测试用户看着月亮。');assert.equal(utterances.at(-1).voice.voiceURI,'premium','personalized sentences stay in device speech path');
run("stopSpeech()");assert.equal(clips.at(-1).paused,true);
assert.equal(run("semanticVisual(get('爱')).includes('meaning-context')"),true,'abstract words use contextual meaning');
assert.equal(run("semanticVisual(get('沙')).includes('#sand')"),true);
assert.equal(run("semanticVisual(get('看')).includes('meaning-context')"),true,'actions are not represented by loose object association');
const svg=fs.readFileSync('dist/illustrations.svg','utf8');for(const id of run('Object.values(WORD_SCENES)'))assert(svg.includes('id="'+id+'"'),id+' scene exists');
const manifest=JSON.parse(fs.readFileSync('dist/audio/manifest.json','utf8'));for(const x of Object.values(manifest)){assert(/^audio\/[a-f0-9]+\.mp3$/.test(x.src));assert(fs.statSync('dist/'+x.src).size>500)}
console.log(`PASS: ${Object.keys(manifest).length} fixed word/sentence/story clips; local media, voice selection, replay cancellation, abstract/scene mapping.`);
