<script setup lang="ts">
import type { Pokemon } from '@/domain/pokemon'
import { usePokemon } from '@/composables/usePokemon'
import Gallery from '@/components/Gallery.vue'

const { list } = usePokemon()
const activeItem = ref<Pokemon | null>(null)

defineOptions({
  name: 'ListView',
})

const handleActiveCard = (payload: Pokemon) => {
  activeItem.value = payload
}
</script>

<template>
  <div class="container">
    <div class="md:flex">
      <div class="w-full md:w-1/3">
        <div v-if="activeItem" class="sticky top-0">
          <img
            :src="activeItem.imageUrl"
            :alt="activeItem.nameTW"
            :style="{ '--view-transition-name': `pokemon-image-${activeItem.name}` }"
            class="vt-img h-full w-full object-cover"
          />
        </div>
      </div>
      <Gallery :list="list" @update-click="handleActiveCard" />
    </div>
  </div>
</template>

<style scoped></style>
