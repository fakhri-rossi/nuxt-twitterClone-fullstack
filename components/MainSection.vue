<template>
  <div class="border-x min-h-screen" :class="twitterBorderColor">
    <div class="sticky top-0 px-4 py-3 bg-white/70 backdrop-blur-md dark:bg-dim-900/70  z-40">

      <div class="flex w-full justify-between">
        <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">
          {{ props.title }}
        </h2>

        <UiColorMode />
      </div>

    </div>

    <div v-if="props.loading" class="flex items-center justify-center p-4 border-b">
      <UiSpinner />
    </div>

    <div v-else>
      <slot />
    </div>
  </div>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig()

const props = defineProps({
  title:{
    type: String,
    required: true
  },
  loading: {
    type: Boolean,
    required: true
  }
})
</script>

<style>

</style>