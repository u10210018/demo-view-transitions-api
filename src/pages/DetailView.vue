<script setup lang="ts">
import { useRoute } from 'vue-router'

defineOptions({
  name: 'DetailView',
})

const route = useRoute()
</script>

<template>
  <div class="container">
    <div>{{ route.params }}</div>
  </div>
</template>

<style scoped></style>
