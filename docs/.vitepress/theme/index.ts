import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ExerciseHeaderImage from './components/ExerciseHeaderImage.vue'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) { app.component('ExerciseHeaderImage', ExerciseHeaderImage) }
}
