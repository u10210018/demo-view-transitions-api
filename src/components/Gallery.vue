<script setup lang="ts">
const imageList = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
</script>

<template>
  <div class="grid grid-cols-3 gap-x-3 gap-y-8">
    <div class="block" v-for="item in imageList" :key="item">
      <img
        alt="Art"
        :src="`https://picsum.photos/200/300?random=${item}`"
        class="h-64 w-full object-cover sm:h-80 lg:h-96"
      />

      <h3 class="text-lg sm:text-xl mt-4 font-bold text-gray-900">Lorem, ipsum dolor.</h3>

      <p class="mt-2 max-w-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
