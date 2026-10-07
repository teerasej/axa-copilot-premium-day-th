<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{ src: string; alt: string }>()
</script>

<template>
  <img
    class="exercise-header-image"
    :src="withBase(src)"
    :alt="alt"
    width="1672"
    height="941"
    decoding="async"
  />
</template>

<style scoped>
.exercise-header-image {
  display: block;
  width: 100%;
  height: auto;
  margin: 1.5rem 0;
}
</style>
