import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { nextTick, onMounted, onUnmounted, watch } from 'vue'
import './custom.css'
import ExerciseHeaderImage from './components/ExerciseHeaderImage.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) { app.component('ExerciseHeaderImage', ExerciseHeaderImage) },
  setup() {
    const route = useRoute()
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
    })
    onUnmounted(() => window.removeEventListener('hashchange', revealLinkedExtension))
    watch(() => route.path, async () => { await nextTick(); revealLinkedExtension() })
  }
}
