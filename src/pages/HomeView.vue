<script setup lang="ts">
import Photos from '@/components/Photos.vue'

defineOptions({
  name: 'HomeView',
})
</script>

<template>
  <div class="container">
    <div class="max-w-[600px] text-p sm:w-2/3">
      The View Transitions API provides a mechanism for easily creating animated transitions between different DOM
      states while also updating the DOM contents in a single step.
    </div>
    <div>
      <Photos />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
