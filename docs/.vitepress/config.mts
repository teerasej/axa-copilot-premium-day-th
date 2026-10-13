import { defineConfig } from 'vitepress'
const siteBase = '/axa-copilot-premium-day-th/'
const exercises = [
  { text: '1. สรุปจากหลักฐาน', link: '/th/exercises/01-ground-the-brief' },
  { text: '2. Excel สู่ KPI dashboard', link: '/th/exercises/02-kpi-to-decision-brief' },
  { text: '3. Outlook และ Copilot Chat', link: '/th/exercises/03-outlook-email-workflow' },
  { text: '4. Teams สู่เอกสารติดตามงาน', link: '/th/exercises/04-teams-meeting-to-document' },
  { text: '5. เลือก Group challenge', link: '/th/exercises/05-group-challenge' },
  { text: 'นำเสนอผลงานกลุ่ม', link: '/th/exercises/07-group-showcase' }
]
const theme = {
  nav: [{ text: 'หน้าแรก', link: '/th/' }, { text: 'เตรียมตัว', link: '/th/before-you-begin' }, { text: 'ไฟล์ฝึก', link: '/th/files' }],
  sidebar: [
    { text: 'เริ่มที่นี่', items: [{ text: 'ภาพรวมและตารางเวลา', link: '/th/' }, { text: 'เตรียมตัวก่อนเริ่ม', link: '/th/before-you-begin' }, { text: 'ดาวน์โหลดไฟล์ฝึก', link: '/th/files' }] },
    { text: 'แบบฝึกหัดหลัก', items: exercises },
    { text: 'Demo และปิดวัน', items: [{ text: 'ชม Agent Builder demo', link: '/th/exercises/06-agent-talking-points' }, { text: 'นำไปใช้กับงาน', link: '/th/wrap-up' }] },
    { text: 'Optional: ฝึกต่อ', items: [{ text: 'Outlook เพิ่มเติม', link: '/th/resources/outlook-extra-practice' }, { text: 'Executive update แบบสั้น', link: '/th/exercises/05-executive-update' }] }
  ],
  outline: { level: [2, 3] as [number, number], label: 'ในหน้านี้' },
  docFooter: { prev: 'ก่อนหน้า', next: 'ถัดไป' },
  skipToContentLabel: 'ข้ามไปเนื้อหา',
  returnToTopLabel: 'กลับด้านบน', sidebarMenuLabel: 'เมนู', darkModeSwitchLabel: 'ธีม',
  lightModeSwitchTitle: 'ใช้ธีมสว่าง', darkModeSwitchTitle: 'ใช้ธีมมืด',
  search: { provider: 'local' as const, options: { locales: { root: { translations: { button: { buttonText: 'ค้นหา', buttonAriaLabel: 'ค้นหาแบบฝึกหัด' }, modal: { displayDetails: 'แสดงรายละเอียด', resetButtonTitle: 'ล้างคำค้นหา', backButtonTitle: 'ปิดการค้นหา', noResultsText: 'ไม่พบผลลัพธ์สำหรับ', footer: { selectText: 'เลือก', navigateText: 'เลื่อน', closeText: 'ปิด' } } } } } } }
}
export default defineConfig({
  lang: 'th-TH', title: 'AXA Copilot Premium — ภาษาไทย', description: 'แบบฝึกหัด Microsoft 365 Copilot สำหรับงานเอกสาร อีเมล และการประชุม',
  base: siteBase, cleanUrls: true, lastUpdated: false,
  locales: { root: { label: 'ภาษาไทย', lang: 'th-TH', link: '/th/', themeConfig: theme } },
  themeConfig: { ...theme, siteTitle: 'Copilot Premium ภาษาไทย' },
  markdown: { codeCopyButtonTitle: 'คัดลอกข้อความ', theme: { light: 'github-light', dark: 'github-dark' }, config(md) {
    const render = md.renderer.rules.link_open
    md.renderer.rules.link_open = (tokens, index, options, env, renderer) => {
      const aria = tokens[index].attrGet('aria-label') || ''
      if (aria.startsWith('Permalink to')) tokens[index].attrSet('aria-label', aria.replace('Permalink to', 'ลิงก์ไปยัง'))
      const href = tokens[index].attrGet('href') || ''
      if (href.startsWith('/files/') && /\.(docx|xlsx|vtt|zip|pptx)(?:[?#]|$)/i.test(href)) {
        tokens[index].attrSet('download', '')
        tokens[index].attrSet('href', siteBase.slice(0, -1) + href)
      }
      return render ? render(tokens, index, options, env, renderer) : renderer.renderToken(tokens, index, options)
    }
  } },
})
