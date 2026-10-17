<script setup lang="ts">
import { useSidebar } from 'vitepress/theme'
const { hasSidebar } = useSidebar()
</script>

<template>
  <footer class="copyright-footer" :class="{ 'has-sidebar': hasSidebar }" aria-label="Copyright and contact">
    <div class="copyright-footer-content">
      <p>© 2026 Teerasej Jiraphatchandej. All rights reserved.</p>
      <nav aria-label="Contact links">
        <a href="mailto:teerasej@nextflow.in.th">Email me</a>
        <span aria-hidden="true">·</span>
        <a href="https://www.facebook.com/teerasej">Facebook</a>
        <span aria-hidden="true">·</span>
        <a href="https://www.youtube.com/teerasej">YouTube</a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.copyright-footer { border-top: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); padding: 24px; color: var(--vp-c-text-2); font-size: 14px; line-height: 1.6; }
.copyright-footer-content { max-width: 1152px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 8px 24px; text-align: center; }
p { margin: 0; }
nav { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 8px; }
a { color: var(--vp-c-brand-1); text-decoration: underline; text-underline-offset: 3px; padding: 8px 2px; white-space: nowrap; }
a:hover { color: var(--vp-c-brand-2); }
a:focus-visible { outline: 3px solid #e4a11b; outline-offset: 3px; border-radius: 3px; }
@media (min-width: 960px) { .copyright-footer.has-sidebar { margin-left: var(--vp-sidebar-width); } }
@media (min-width: 1440px) { .copyright-footer.has-sidebar { margin-left: calc((100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width)); } }
</style>
