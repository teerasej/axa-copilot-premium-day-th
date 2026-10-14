import { defineConfig } from 'vitepress'
// Keep the published base and page paths stable for previously shared links.
const siteBase = '/axa-copilot-premium-day-th/'
const exercises = [
  { text: '1. An evidence-grounded brief', link: '/th/exercises/01-ground-the-brief' },
  { text: '2. Excel to a KPI dashboard', link: '/th/exercises/02-kpi-to-decision-brief' },
  { text: '3. Outlook and Copilot Chat', link: '/th/exercises/03-outlook-email-workflow' },
  { text: '4. Teams to a follow-up brief', link: '/th/exercises/04-teams-meeting-to-document' },
  { text: '5. Choose a group challenge', link: '/th/exercises/05-group-challenge' },
  { text: 'Showcase your group work', link: '/th/exercises/07-group-showcase' }
]
const theme = {
  nav: [{ text: 'Home', link: '/th/' }, { text: 'Preparation', link: '/th/before-you-begin' }, { text: 'Practice files', link: '/th/files' }],
  sidebar: [
    { text: 'Start here', items: [{ text: 'Overview and timetable', link: '/th/' }, { text: 'Before you begin', link: '/th/before-you-begin' }, { text: 'Download practice files', link: '/th/files' }] },
    { text: 'Core exercises', items: exercises },
    { text: 'Demo and reflection', items: [{ text: 'Watch the Agent Builder demo', link: '/th/exercises/06-agent-talking-points' }, { text: 'Reflect and apply', link: '/th/wrap-up' }] },
    { text: 'Optional practice', items: [{ text: 'More Outlook practice', link: '/th/resources/outlook-extra-practice' }, { text: 'A concise executive update', link: '/th/exercises/05-executive-update' }] }
  ],
  outline: { level: [2, 3] as [number, number], label: 'On this page' },
  docFooter: { prev: 'Previous', next: 'Next' },
  skipToContentLabel: 'Skip to content', returnToTopLabel: 'Return to top', sidebarMenuLabel: 'Menu',
  darkModeSwitchLabel: 'Theme', lightModeSwitchTitle: 'Switch to light theme', darkModeSwitchTitle: 'Switch to dark theme',
  search: { provider: 'local' as const }
}
export default defineConfig({
  lang: 'en-US', title: 'AXA Copilot Premium — English Edition', description: 'Microsoft 365 Copilot exercises for documents, email, meetings and group challenges',
  base: siteBase, cleanUrls: true, lastUpdated: false,
  locales: { root: { label: 'English', lang: 'en-US', link: '/th/', themeConfig: theme } },
  themeConfig: { ...theme, siteTitle: 'Copilot Premium' },
  markdown: { codeCopyButtonTitle: 'Copy text', theme: { light: 'github-light', dark: 'github-dark' }, config(md) {
    const render = md.renderer.rules.link_open
    md.renderer.rules.link_open = (tokens, index, options, env, renderer) => {
      const href = tokens[index].attrGet('href') || ''
      if (href.startsWith('/files/') && /\.(docx|xlsx|vtt|zip|pptx)(?:[?#]|$)/i.test(href)) {
        tokens[index].attrSet('download', '')
        tokens[index].attrSet('href', siteBase.slice(0, -1) + href)
      }
      return render ? render(tokens, index, options, env, renderer) : renderer.renderToken(tokens, index, options)
    }
  } },
})
