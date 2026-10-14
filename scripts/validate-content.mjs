import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
const docs = path.resolve('docs')
const errors = []
const pages = []
function walk(dir) { for (const item of fs.readdirSync(dir, { withFileTypes: true })) { const p=path.join(dir,item.name); if(item.isDirectory() && !['.vitepress','public'].includes(item.name)) walk(p); else if(item.isFile() && p.endsWith('.md')) pages.push(p) } }
walk(docs)
for(const p of pages) {
 const text=fs.readFileSync(p,'utf8')
 const visibleSource=text.replace(/<span id="[^"]+" class="legacy-anchor" aria-hidden="true"><\/span>/g,'')
 if(/[\u0E00-\u0E7F]/u.test(visibleSource)) errors.push(`${p}: unexpected Thai wording`)
 if(!/[A-Za-z]/.test(visibleSource)) errors.push(`${p}: missing English learner text`)
 if(/\/en\/|AXA-Copilot-Premium-Training-v2\.pdf|notion\.so|workspace-private|coordinator-update/i.test(text)) errors.push(`${p}: stale/private reference`)
 for(const m of text.matchAll(/(?:\]\(|src=")([^\s)"#]+)(?:#[^\s)"]*)?[)"]/g)) {
  const link=m[1]; if(/^(https?:|mailto:)/.test(link)) continue
  const resolved=link.startsWith('/')?path.join(docs,link.startsWith('/files/')||link.startsWith('/images/')?'public':'',link):path.resolve(path.dirname(p),link)
  if(![resolved,resolved+'.md',path.join(resolved,'index.md')].some(x=>fs.existsSync(x))) errors.push(`${p}: missing link ${link}`)
 }
 const practices=text.split(/^###? Practice /m).slice(1)
 for(const practice of practices) {
  if(!practice.includes('**Primary target:**')) errors.push(`${p}: Practice lacks target`)
  const check=practice.match(/^###?#? Quick check\n\n((?:- .*\n?)+)/m)
  if(!check) errors.push(`${p}: Practice lacks Quick check`)
  else { const n=check[1].split('\n').filter(x=>x.startsWith('- ')).length; if(n<1||n>2) errors.push(`${p}: expected 1–2 Quick checks`) }
 }
}
const exerciseNames=['01-ground-the-brief','02-kpi-to-decision-brief','03-outlook-email-workflow','04-teams-meeting-to-document','05-group-challenge','07-group-showcase','05-executive-update','06-agent-talking-points']
for(const slug of exerciseNames) if(!fs.existsSync(path.join(docs,'th/exercises',slug+'.md'))) errors.push(`Missing ${slug}`)
const outlook=fs.readFileSync(path.join(docs,'th/exercises/03-outlook-email-workflow.md'),'utf8')
if((outlook.match(/^## Practice /gm)||[]).length!==3) errors.push('Expected three focused Outlook/Chat practices')
const teams=fs.readFileSync(path.join(docs,'th/exercises/04-teams-meeting-to-document.md'),'utf8')
if((teams.match(/^## Practice /gm)||[]).length!==3) errors.push('Expected three Teams practices')
const home=fs.readFileSync(path.join(docs,'th/index.md'),'utf8')
const blocks=[['09:00','10:30'],['10:45','12:00'],['13:00','13:30'],['13:30','14:00'],['14:00','14:30'],['14:45','15:25'],['15:25','15:45'],['15:45','16:00']]
const minutes=t=>Number(t.slice(0,2))*60+Number(t.slice(3))
if(blocks.reduce((n,[a,b])=>n+minutes(b)-minutes(a),0)!==330) errors.push('Expected 330 learning minutes')
for(const [a,b] of [...blocks,['10:30','10:45'],['12:00','13:00'],['14:30','14:45']]) if(!home.includes(a+'–'+b)) errors.push('Missing timetable block '+a)
const actualBlocks=[...home.matchAll(/\| (\d{2}:\d{2})–(\d{2}:\d{2}) \|/g)].map(m=>[m[1],m[2]])
if(actualBlocks.length!==11 || actualBlocks[0]?.[0]!=='09:00' || actualBlocks.at(-1)?.[1]!=='16:00') errors.push('Expected continuous 11-row learning day')
for(let i=1;i<actualBlocks.length;i++) if(actualBlocks[i-1][1]!==actualBlocks[i][0]) errors.push('Timetable gap or overlap')
const challenge=fs.readFileSync(path.join(docs,'th/exercises/05-group-challenge.md'),'utf8')
for(const name of ['Excel Detective','Excel Rescue','PowerPoint Makeover','Management Pitch']) if(!challenge.includes(name)) errors.push('Missing challenge '+name)
if((challenge.match(/^### Practice /gm)||[]).length!==4) errors.push('Expected four challenge choices')
const optional=fs.readFileSync(path.join(docs,'th/resources/outlook-extra-practice.md'),'utf8')
if((optional.match(/^### Practice /gm)||[]).length!==6 || !optional.includes('Optional')) errors.push('Expected six preserved optional email practices')
const demo=fs.readFileSync(path.join(docs,'th/exercises/06-agent-talking-points.md'),'utf8')
if(!demo.includes('Agent Builder') || !demo.includes('Learners observe')) errors.push('Instructor-only Agent Builder demo missing')
const manifest=JSON.parse(fs.readFileSync('scripts/practice-files.json','utf8'))
const assetDir=path.join(docs,'public/files'), files=fs.readdirSync(assetDir)
if(Object.keys(manifest.files).length!==12 || files.filter(x=>/\.(docx|xlsx|vtt|pptx)$/.test(x)).length!==12) errors.push('Expected 12 practice assets')
for(const [name,expected] of Object.entries({...manifest.files,[manifest.archive]:manifest.archiveSha256})) {
 const f=path.join(assetDir,name)
 if(!fs.existsSync(f)||crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex')!==expected) errors.push('Practice asset hash mismatch: '+name)
}
if(files.some(x=>x.endsWith('.pdf'))) errors.push('Stale course PDF not allowed')
if(errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Passed: ${pages.length} English pages, focused routes, four choices, 330 learning minutes, links and 12 assets + ZIP hashes.`)
