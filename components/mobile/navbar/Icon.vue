<template>
  <div 
  class="flex items-center justify-center rounded-full p-1"
  :class="activeClassWrapper" >
      
      <UIcon 
      @click="navigateTo(props.to)"
      class=" w-7 h-7" 
      :name="props.iconName" 
      :class="activeClass" />

    </div>
</template>

<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    required: true
  },
  iconName: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  }
})

const activeClass= computed(() => {
  return props.isActive 
  ? 'text-blue-400  dark:text-dim-100' 
  : 'text-gray-800 dark:text-white'
})

const activeClassWrapper= computed(() => {
  return props.isActive 
  ? 'bg-blue-400/30' 
  : ''
})

</script>

<style>

</style>