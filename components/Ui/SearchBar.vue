<template>
  <div class="relative m-2">
    
    <div class="absolute flex items-center pl-4 h-full text-gray-600 cursor-pointer">
      <UIcon 
      class="w-6 h-6" 
      name="i-ic-twotone-search" 
      @click="handleSearch" />
    </div>

    <input 
    type="text"
    @keyup.enter="handleSearch"
    v-model="search"
    class="flex items-center w-full pl-12 text-sm font-normal text-black dark:text-gray-100 bg-gray-200 rounded-full shadow border border-gray-200 dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border focus:border-blue-200 h-9" 
    placeholder="Search twitter" >

    </div>
</template>

<script setup>
const search = ref('');

function handleSearch(){
  useRouter().push({
    path: '/search',
    query: {
      q: search.value
    }
  })
}
</script>

<style>

</style>