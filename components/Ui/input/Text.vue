<template>
  <div>
    <label v-if="props.label" :for="props.name" class="block pl-3 ml-px text-sm font-medium text-gray-700">
      {{ props.label }}
    </label>

    <div class="mt-1">
      <input class="px-4 block w-full rounded-full border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
      :type="props.type" 
      :name="props.name" 
      :id="props.name" 
      :placeholder="props.placeholder"
      
      @input="event => emit('update:modelValue', event.target.value)"
    </div>

  </div>
</template>

<script setup>
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  label: {
    type: String,
    default: null
  },

  modelValue: {
    type: String,
    required: true
  },

  placeholder: {
    type: String,
    default: null
  },

  name: {
    type: String,
    default: 'text'
  },

  type: {
    type: String,
    required: true
  }
})
</script>

<style>

</style>