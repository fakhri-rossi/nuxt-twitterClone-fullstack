<template>
  <div class="flex items-center justify-between p-3 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-white/20" :class="`${defaultTransition} ${twitterBorderColor}`">
    <div class="flex items-center gap-2">
      <!-- profile photo -->
      <img class="w-10 h-10 rounded-full" :src="props.imgSrc" :alt="props.username">

      <!-- text -->
      <div class="flex flex-col">
        <h1 class="font-semibold text-sm text-gray-800 dark:text-white">
          {{ props.name }}
        </h1>
  
        <p class="text-xs text-gray-400">
          {{props.username}}
        </p>
      </div>

    </div>

    <!-- follow button -->
    <div class="flex items-center h-full">
      <button class="flex items-center px-4 py-2 rounded-full font-bold text-xs text-white dark:text-black bg-black dark:bg-white">
        Follow
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['name', 'username', 'imgSrc']);
const { defaultTransition, twitterBorderColor } = useTailwindConfig();
</script>

<style>

</style>