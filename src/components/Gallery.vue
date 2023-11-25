<script setup lang="ts">
import type { Pokemon } from '@/domain/pokemon'
import { viewTransition } from '@/lib/utils'
import Badge from '@/components/Badge.vue'
const props = defineProps<{
  list: Pokemon[]
}>()

const BG_COLOR_LIST = ['#B06161', '#DC8686', '#F0DBAF', '#7ED7C1', '#CAEDFF', '#D8B4F8', '#FFC7EA', '#FBF0B2']
const getRandomColor = (num: number) => {
  return BG_COLOR_LIST[num % BG_COLOR_LIST.length]
}

const emit = defineEmits(['update-click'])
const activeId = ref<Pokemon['id']>(NaN)
const handleNameClick = (item: Pokemon) => {
  viewTransition(async () => {
    if (activeId.value === item.id) {
      emit('update-click', null)
      activeId.value = NaN
    } else {
      emit('update-click', item)
      activeId.value = item.id
    }
  })
}
</script>

<template>
  <div class="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3">
    <div
      v-for="(item, index) in props.list"
      :key="item.id"
      class="block"
      :style="{ '--primary-color': getRandomColor(index) }"
    >
      <RouterLink :to="`/detail/${item.name}`" class="group grid aspect-square grid-cols-1 grid-rows-1">
        <div
          class="clip-to-circle col-span-1 col-start-1 row-span-1 row-start-1 rounded-xl bg-[var(--primary-color)] transition-[transform,filter,clip-path] duration-300 ease-easeInOutBack group-hover:translate-y-[5%] group-hover:scale-90"
        ></div>
        <div
          class="z-10 col-span-1 col-start-1 row-span-1 row-start-1 transition-[transform,filter] duration-500 ease-easeOutBack group-hover:-translate-x-[10%] group-hover:-translate-y-[10%] group-hover:scale-110 group-hover:drop-shadow-[0_10px_10px_rgb(0,0,0,0.4)]"
        >
          <img
            v-show="activeId != item.id"
            :src="item.imageUrl"
            :alt="item.nameTW"
            :style="{ '--view-transition-name': `pokemon-image-${item.name}` }"
            class="vt-img h-full w-full object-cover"
          />
        </div>
      </RouterLink>
      <div class="flex">
        <h3 @click="handleNameClick(item)" class="title-underline mt-4 cursor-pointer text-h5 font-bold">
          {{ item.nameTW }}
        </h3>
      </div>

      <div class="mt-2 max-w-sm">
        <div class="mb-2 text-sm">{{ item.flavorText[0] }}</div>
        <div class="text-xs">
          <Badge class="mb-2 bg-brand-09" icon="crosshairs">{{ item.genera }}</Badge>
          <div class="flex items-center gap-2">
            <Badge class="bg-brand-02">
              <div class="text-xs">{{ item.weightDisplay }} 公斤</div>
            </Badge>
            <Badge class="bg-brand-02">
              <div class="text-xs">{{ item.heightDisplay }} 公分</div>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.clip-to-circle {
  clip-path: circle(72% at 50% 50%);
  .group:hover & {
    clip-path: circle(40% at 55% 55%);
  }
}

.title-underline {
  &:after {
    @apply flex h-0.5 w-7 rounded-sm content-[''];
    @apply bg-gradient-to-r from-brand-10 to-brand-03;
  }
}
</style>
