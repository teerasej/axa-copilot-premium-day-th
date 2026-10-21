<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, withBase } from 'vitepress'
import CopyrightFooter from './components/CopyrightFooter.vue'
const { frontmatter } = useData()
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-hero-actions-after>
      <div v-if="frontmatter.hero?.download" class="hero-download">
        <a :href="withBase(frontmatter.hero.download.link)" download class="hero-download-button">
          <span aria-hidden="true">↓</span> {{ frontmatter.hero.download.text }}
        </a>
      </div>
    </template>
    <template #layout-bottom><CopyrightFooter /></template>
  </DefaultTheme.Layout>
</template>

<style scoped>
.hero-download { margin-top: 16px; }
.hero-download-button {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  min-height: 48px; max-width: 100%; padding: 10px 20px; box-sizing: border-box;
  border: 1px solid var(--vp-button-alt-border); border-radius: 24px;
  background: var(--vp-button-alt-bg); color: var(--vp-button-alt-text);
  font-size: 14px; font-weight: 600; line-height: 24px; text-align: center;
  white-space: normal; text-decoration: none;
}
.hero-download-button:hover { background: var(--vp-button-alt-hover-bg); color: var(--vp-button-alt-hover-text); }
.hero-download-button:focus-visible { outline: 3px solid var(--vp-c-brand-1); outline-offset: 4px; }
</style>
