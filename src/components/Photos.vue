<script setup lang="ts">
import { viewTransition } from '@/lib/utils'

const imageList = ref<{ key: string; name: string; imageUrl: string }[]>(
  Array.from({ length: 10 }, (_, i) => ({
    key: `image-${i}`,
    name: `image-${i}`,
    imageUrl: `https://picsum.photos/400/400?grayscale&random=${i}`,
  }))
)

const activeKey = ref<string>('image-0')

const handleActive = async (key: string) => {
  viewTransition(() => {
    activeKey.value = key
  })
}
</script>

<template>
  <div class="photo-wrapper my-10">
    <div class="flex w-full flex-wrap items-center gap-8">
      <button
        type="button"
        v-for="item in imageList"
        :key="item.key"
        class="h-[250px] w-[250px]"
        :class="{ 'vt-img': activeKey === item.key }"
        @click="handleActive(item.key)"
      >
        <img class="h-full w-full object-cover" :src="item.imageUrl" :alt="item.name" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.photo-wrapper {
  .vt-img {
    --view-transition-name: photo-transition;
    width: 532px;
  }
}
</style>
