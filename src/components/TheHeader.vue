<script setup lang="ts"></script>

<template>
  <header>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="text-center sm:text-left">
          <RouterLink to="/" class="text-h4">View Transitions API</RouterLink>
        </div>

        <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
          <RouterLink
            to="/"
            class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
          >
            <span class="text-sm font-medium">回到首頁</span>
          </RouterLink>

          <RouterLink
            to="/pokemon"
            class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium transition hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            列表
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss"></style>
