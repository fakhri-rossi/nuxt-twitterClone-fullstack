<template>
  <button class="flex items-center justify-center rounded-full text-white bg-blue-400 hover:bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed" :class="classes" :disabled="props.disabled" @click="handleClick">

    <!-- <span :class="textSize"> -->
      <slot />
    <!-- </span> -->

  </button>
</template>

<script setup>
const emits = defineEmits(['onClick']);

const props = defineProps({
  disabled : {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md'
  },
  liquid: {
    type: Boolean,
    default: false
  },
})

const paddingClass = computed(() => {
  switch(props.size){
    case 'sm':
      return 'py-2 px-3'
    case 'lg':
      return 'px-4 py-3'
    default:
      return 'px-3 py-3'
  }
});

const textSize = computed(() => {
  switch(props.size){
    case 'lg':
      return 'text-md';
    default:
      return 'text-sm'
  }
});

const defaultWidth = computed(() => {
  switch(props.size){
    default:
      return 'w-min';
  }
});

const classes = computed(() => {
  return `${paddingClass.value} ${props.liquid ? 'w-full' : defaultWidth.value}`
});

function handleClick(event){
  emits('onClick', event)
}
</script>

<style>

</style>