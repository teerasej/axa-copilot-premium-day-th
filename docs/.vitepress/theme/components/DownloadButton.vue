<script setup lang="ts">
import { withBase } from 'vitepress'
defineProps<{ href: string; label: string; accessibleLabel?: string }>()
</script>

<template>
  <a class="course-download-button" :href="withBase(href)" download :aria-label="accessibleLabel || label">
    <span aria-hidden="true">↓</span><span>{{ label }}</span>
  </a>
</template>
