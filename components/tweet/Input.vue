<template>
  <div>
    <div class="flex items-center flex-shrink-0 p-4 pb-0">

      <div class="flex w-12 items-top"> 
        <img :src="props.user?.profileImage" alt="" class="inline-block w-10 h-10 rounded-full">
      </div>

      <div class="w-full p-2">
        <textarea v-model="text" class="w-full h-10 text-lg text-gray-900 placeholder:text-gray-400 bg-transparent border-0 dark:text-white focus:ring-0">

        </textarea>
      </div>

    </div>

    <!-- file selector -->
    <div class="p-4 pl-16 ">
      <input type="file" ref="imageInput" hidden
      accept="image/png, image/gif, image/jpeg, image/jpg" @change="handleImageChange">
    </div>

    <!-- inputMenu icons -->
    <div class="flex p-2 pl-14">
      <div v-for="(inputMenu, i) in inputMenus" :key="i" class="p-2 text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-dim-800 cursor-pointer flex items-center" @click="inputMenu.click">
        <UIcon class="w-6 h-6" :name="inputMenu.icon" />
      </div>
    </div>

    <div>
      <button @click="handleFormSubmit">Tweet</button>
    </div>

  </div>
</template>

<script setup>
const imageInput = ref();
const text = ref('');
const selectedFile = ref(null);
const emits = defineEmits(['onSubmit']);

const inputMenus = [
  { 
    name: 'image', 
    icon: 'i-ic-outline-image', 
    click: () => handleImageClick() 
  },
  { 
    name: 'gif', 
    icon: 'i-heroicons-gif-20-solid', 
    click: () => '' 
  },
  { 
    name: 'chart', 
    icon: 'i-heroicons-chart-bar-16-solid', 
    click: () => '' 
  },
  { 
    name: 'emoji', 
    icon: 'i-ic-outline-emoji-emotions', 
    click: '' 
  },
  { 
    name: 'calendar', 
    icon: 'i-ic-baseline-calendar-month', 
    click: '' 
  },
]

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

function handleFormSubmit(){
  emits('onSubmit', {
    text: text.value,
    mediaFiles: [selectedFile.value]
  })
}

function handleImageClick(){
  imageInput.value.click()
}

function handleImageChange(event){
  const file = event.target.files[0];
  selectedFile.value = file;
}

</script>

<style>

</style>