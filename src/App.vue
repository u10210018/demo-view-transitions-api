<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <div>
    <TheHeader />
    <RouterView></RouterView>
    <footer class="h-20 md:h-40"></footer>
  </div>
</template>

<style scoped></style>
