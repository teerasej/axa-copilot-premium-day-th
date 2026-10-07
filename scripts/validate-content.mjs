import fs from 'node:fs'
import path from 'node:path'
const docs = path.resolve('docs')
const errors = []
const pages = []
function walk(dir) { for (const item of fs.readdirSync(dir, { withFileTypes: true })) { const p=path.join(dir,item.name); if(item.isDirectory() && !['.vitepress','public'].includes(item.name)) walk(p); else if(item.isFile() && p.endsWith('.md')) pages.push(p) } }
walk(docs)
for(const p of pages) {
 const text=fs.readFileSync(p,'utf8')
 if(!/[\u0E00-\u0E7F]/u.test(text)) errors.push(`${p}: missing Thai learner text`)
 if(/\/en\/|AXA-Copilot-Premium-Training-v2\.pdf|notion\.so|workspace-private|coordinator-update/i.test(text)) errors.push(`${p}: stale/private reference`)
 for(const m of text.matchAll(/(?:\]\(|src=")([^\s)"#]+)(?:#[^\s)"]*)?[)"]/g)) {
  const link=m[1]; if(/^(https?:|mailto:)/.test(link)) continue
  const resolved=link.startsWith('/')?path.join(docs,link.startsWith('/files/')||link.startsWith('/images/')?'public':'',link):path.resolve(path.dirname(p),link)
  if(![resolved,resolved+'.md',path.join(resolved,'index.md')].some(x=>fs.existsSync(x))) errors.push(`${p}: missing link ${link}`)
 }
 const practices=text.split(/^###? Practice /m).slice(1)
 for(const practice of practices) {
  if(!practice.includes('**เป้าหมายหลัก:**')) errors.push(`${p}: Practice lacks target`)
  const check=practice.match(/^###?#? Quick check\n\n((?:- .*\n?)+)/m)
  if(!check) errors.push(`${p}: Practice lacks Quick check`)
  else { const n=check[1].split('\n').filter(x=>x.startsWith('- ')).length; if(n<1||n>2) errors.push(`${p}: expected 1–2 Quick checks`) }
 }
}
const exerciseNames=['01-ground-the-brief','02-kpi-to-decision-brief','03-outlook-email-workflow','04-teams-meeting-to-document','05-executive-update','06-agent-talking-points']
for(const slug of exerciseNames) if(!fs.existsSync(path.join(docs,'th/exercises',slug+'.md'))) errors.push(`Missing ${slug}`)
const outlook=fs.readFileSync(path.join(docs,'th/exercises/03-outlook-email-workflow.md'),'utf8')
if((outlook.match(/^### Practice /gm)||[]).length!==6) errors.push('Expected six Outlook/Chat practices')
const teams=fs.readFileSync(path.join(docs,'th/exercises/04-teams-meeting-to-document.md'),'utf8')
if((teams.match(/^## Practice /gm)||[]).length!==3) errors.push('Expected three Teams practices')
const home=fs.readFileSync(path.join(docs,'th/index.md'),'utf8')
const blocks=[['09:00','10:30'],['10:45','12:00'],['13:00','14:15'],['14:15','14:30'],['14:45','15:15'],['15:15','15:30'],['15:30','15:35'],['15:35','15:45'],['15:45','16:00']]
const minutes=t=>Number(t.slice(0,2))*60+Number(t.slice(3))
if(blocks.reduce((n,[a,b])=>n+minutes(b)-minutes(a),0)!==330) errors.push('Expected 330 learning minutes')
for(const [a,b] of [...blocks,['10:30','10:45'],['12:00','13:00'],['14:30','14:45']]) if(!home.includes(a+'–'+b)) errors.push('Missing timetable block '+a)
const files=fs.readdirSync(path.join(docs,'public/files'))
if(files.filter(x=>/\.(docx|xlsx|vtt|pptx)$/.test(x)).length!==11 || files.filter(x=>x.endsWith('.zip')).length!==1 || files.some(x=>x.endsWith('.pdf'))) errors.push('Practice downloads must be 11 assets + ZIP, without stale course PDF')
if(errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Passed: ${pages.length} Thai pages, six email practices, three Teams practices, 330 learning minutes, links and 12 downloads.`)
