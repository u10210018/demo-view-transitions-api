<script setup lang="ts">
import Gallery from '@/components/Gallery.vue'

defineOptions({
  name: 'ListView',
})
</script>

<template>
  <div class="container">
    <div class="flex">
      <div class="w-1/3"></div>
      <Gallery />
    </div>
  </div>
</template>

<style scoped></style>
