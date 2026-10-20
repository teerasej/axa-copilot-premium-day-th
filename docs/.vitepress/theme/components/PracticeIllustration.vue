<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import images from '../practice-images.json'
const props = defineProps<{ id: string; alt: string }>()
const asset = computed(() => images[props.id as keyof typeof images])
const source = computed(() => withBase(asset.value.src))
const smallSource = computed(() => withBase(asset.value.smallSrc))
</script>

<template>
  <img class="practice-illustration" :data-practice-illustration="id"
    :src="source" :srcset="`${smallSource} ${asset.smallWidth}w, ${source} ${asset.width}w`"
    sizes="(min-width: 1344px) 688px, (min-width: 1280px) calc(100vw - 656px), (min-width: 1088px) 688px, (min-width: 960px) calc(100vw - 400px), (min-width: 736px) 688px, calc(100vw - 48px)"
    :alt="alt" :width="asset.width" :height="asset.height"
    :loading="asset.eager ? 'eager' : 'lazy'" decoding="async" />
</template>

<style scoped>
.practice-illustration {
  display: block;
  width: 100%;
  height: auto;
  margin: 1rem 0 1.25rem;
  border-radius: 12px;
  background: #f8f7f2;
  border: 1px solid var(--workshop-line);
  box-sizing: border-box;
}
</style>
