<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import CopyrightFooter from './components/CopyrightFooter.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-bottom><CopyrightFooter /></template>
  </DefaultTheme.Layout>
</template>
