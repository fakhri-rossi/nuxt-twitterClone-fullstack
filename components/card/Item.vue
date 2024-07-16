<template>
  <div class="p-3 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-white/20" :class="classWrapper">
    <h2 class="font-bold text-gray-800 text-md dark:text-white">
      {{ props.title }}
    </h2>

    <p class="text-xs text-gray-400">
      {{ props.count }}
    </p>
  </div>
</template>

<script setup>
const { twitterBorderColor, defaultTransition } = useTailwindConfig();
const classWrapper = computed(() => `${twitterBorderColor} ${defaultTransition}`);
const props = defineProps(['title', 'count'])
</script>

<style>

</style>