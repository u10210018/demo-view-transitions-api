<script setup lang="ts">
import { usePokemon } from '@/composables/usePokemon'
import Gallery from '@/components/Gallery.vue'

const { list } = usePokemon()

defineOptions({
  name: 'ListView',
})
</script>

<template>
  <div class="container">
    <div class="md:flex">
      <div class="w-full md:w-1/3"></div>
      <Gallery :list="list" />
    </div>
  </div>
</template>

<style scoped></style>
