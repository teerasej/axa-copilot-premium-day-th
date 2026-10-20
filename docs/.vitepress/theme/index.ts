import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import { useRoute } from 'vitepress'
import { nextTick, onMounted, onUnmounted, watch } from 'vue'
import './custom.css'
import DownloadButton from './components/DownloadButton.vue'
import PracticeIllustration from './components/PracticeIllustration.vue'
import ExerciseHeaderImage from './components/ExerciseHeaderImage.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) { app.component('PracticeIllustration', PracticeIllustration); app.component('ExerciseHeaderImage', ExerciseHeaderImage); app.component('DownloadButton', DownloadButton) },
  setup() {
    const route = useRoute()
    // Use the native backdrop close action even when only the hash changes.
    // Capture is needed because the native sidebar stops click propagation.
    const closePracticeMenu = (event: MouseEvent) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
      const link = (event.target as Element)?.closest<HTMLAnchorElement>('.VPSidebar a[href]')
      const menu = document.querySelector<HTMLButtonElement>('.VPLocalNav .menu[aria-expanded="true"]')
      if (!link) return
      // A repeated selection must also reveal a level the learner closed manually.
      requestAnimationFrame(revealLinkedExtension)
      if (!menu) return
      document.querySelector<HTMLElement>('.VPBackdrop')?.click()
      menu.focus({ preventScroll: true })
    }
    // Search and heading links should reveal their target inside an optional level.
    const revealLinkedExtension = () => {
      let id: string
      try { id = decodeURIComponent(window.location.hash.slice(1)) } catch { return }
      const target = document.getElementById(id)
      const extension = target?.closest('details.challenge-extension') as HTMLDetailsElement | null
      if (extension && !extension.open) {
        extension.open = true
        requestAnimationFrame(() => target?.scrollIntoView({ block: 'start' }))
      }
    }
    onMounted(() => {
      revealLinkedExtension()
      window.addEventListener('hashchange', revealLinkedExtension)
      document.addEventListener('click', closePracticeMenu, true)
    })
    onUnmounted(() => {
      window.removeEventListener('hashchange', revealLinkedExtension)
      document.removeEventListener('click', closePracticeMenu, true)
    })
    watch(() => route.path, async () => { await nextTick(); revealLinkedExtension() })
  }
}
