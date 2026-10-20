import { defineConfig } from 'vitepress'
import { exerciseMenu, exercisePager, practiceSidebar } from './navigation'
// Keep the published base and page paths stable for previously shared links.
const siteBase = '/axa-copilot-premium-day-th/'
const theme = {
  nav: [{ text: 'Home', link: '/th/' }, { text: 'Preparation', link: '/th/before-you-begin' }, { text: 'Exercises', items: exerciseMenu }, { text: 'Practice files', link: '/th/files' }],
  sidebar: practiceSidebar,
  outline: { level: [2, 3] as [number, number], label: 'On this page' },
  docFooter: { prev: 'Previous', next: 'Next' },
  skipToContentLabel: 'Skip to content', returnToTopLabel: 'Return to top', sidebarMenuLabel: 'Exercises & practices',
  darkModeSwitchLabel: 'Theme', lightModeSwitchTitle: 'Switch to light theme', darkModeSwitchTitle: 'Switch to dark theme',
  search: { provider: 'local' as const }
}
export default defineConfig({
  lang: 'en-US', title: 'AXA Copilot Premium — English Edition', description: 'Microsoft 365 Copilot exercises for documents, email, meetings and group challenges',
  base: siteBase, cleanUrls: true, lastUpdated: false,
  transformPageData(page) {
    const pager = exercisePager(page.relativePath)
    if (pager) {
      page.frontmatter.prev ??= pager.prev
      page.frontmatter.next ??= pager.next
    }
  },
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
