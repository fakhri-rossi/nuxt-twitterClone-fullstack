<template>
  <div :class="`w-full flex justify-center items-center p-2 border border-${color}-500 rounded-xl`">

    <UIcon :class="`text-${color}-500 px-4 w-7 h-7`" :name="iconName" />

    <div class="w-full ml-5 flex flex-col justify-center">
      <h1 :class="`text-${color}-500 font-bold text-md`">{{ alertTitle }}</h1>
  
      <p v-if="alertMessage" :class="`text-${color}-500 font-normal text-normal`">
        {{ alertMessage }}
      </p>
    </div>
  </div>
</template>

<script setup>

const { alertMessage, alertTitle, alertType } = useAlert();

const color = computed(() => {
    switch(alertType.value){
    case 'danger':
      return 'red'
      
    case 'success':
      return 'green'
    
    default:
      return 'green'
      
  }})

const iconName = computed(() => {
  switch(alertType.value){
    case 'danger':
      return 'i-ic-round-warning-amber'
      
    case 'success':
      return 'i-heroicons-check-badge-solid'
    
    default:
      return 'i-heroicons-check-badge-solid'
  }
})

// const property = reactive({

//   color: computed(() => {
//     switch(alertType){
//     case 'danger':
//       return 'red'
      
//     case 'success':
//       return 'green'
    
//     default:
//       return 'green'
      
//   }

//   }),

//   icon: computed(() => {
//     switch(alertType){
//     case 'danger':
//       return 'i-ic-round-warning-amber'
      
//     case 'success':
//       return 'i-heroicons-check-badge-solid'
    
//     default:
//       return 'i-heroicons-check-badge-solid'
//   }
//   })
// })

// onMounted(() => {
//   switch(alertType){
//     case 'danger':
//       property.color = 'red'
//       property.icon = 'i-ic-round-warning-amber'
      
//     case 'success':
//       property.color = 'green'
//       property.icon = 'i-heroicons-check-badge-solid'
    
//     default:
//       property.color = 'green'
//       property.icon = 'i-heroicons-check-badge-solid'
//   }
// })
</script>

<style>

</style>