<script setup lang="ts">
import type { Pokemon } from '@/domain/pokemon'
import { useRoute } from 'vue-router'
import { usePokemon } from '@/composables/usePokemon'

defineOptions({
  name: 'DetailView',
})

const data = ref<Pokemon | null>(null)
const { getDetail } = usePokemon()

const route = useRoute()
onMounted(async () => {
  if (!Array.isArray(route.params.name)) {
    data.value = await getDetail(route.params.name)
  }
})
</script>

<template>
  <div class="container">
    <div v-if="data" class="grid grid-cols-1 grid-rows-1">
      <div class="col-span-1 col-start-1 row-span-1 row-start-1">
        <div class="grid h-full place-content-center overflow-hidden">
          <h1 class="bg-for-name h-[1em] max-w-full overflow-hidden text-center font-bold uppercase leading-[1em]">
            {{ data.name }}
          </h1>
        </div>
      </div>
      <div class="col-span-1 col-start-1 row-span-1 row-start-1">
        <div class="m-auto max-w-[50vh]">
          <div class="aspect-square">
            <img
              :alt="data.nameTW"
              :src="data.imageUrl"
              :style="{ '--view-transition-name': `pokemon-image-${data.name}` }"
              class="vt-img h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-for-name {
  @apply bg-gradient-to-b from-white from-50% to-[#AA271B] to-50% bg-clip-text text-transparent;
  font-size: clamp(2rem, 15vw, 8rem);
}
</style>
