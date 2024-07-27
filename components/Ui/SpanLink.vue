<template>
  <span class="text-blue-400 cursor-pointer">
    <NuxtLink v-if="!props.notLink" :to="props.to" :target="props.newTab ? '_blank' : ''">
      <slot />
    </NuxtLink>
  </span>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true
  },
  newTab: {
    type: Boolean,
    default: false
  },
  notLink: {
    type: Boolean,
    default: false
  }
})
</script>

<style></style>