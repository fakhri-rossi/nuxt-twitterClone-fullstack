<template>
  <div class="h-screen flex flex-col">

    <div class="flex items-center justify-between w-full">

      <div class="p-2 my-2 rounded-full hover:bg-blue-100 w-min
      dark:hover:bg-white/20" :class="defaultTransition">
        <NuxtLink to="/">
          
          <div class="w-8 h-8">
            <LogoTwitter />
          </div>
    
        </NuxtLink>
  
      </div>
  
      <UiColorMode />

    </div>


    <!-- tabs -->
    <SidebarLeftTab />

    <div class="mt-6 hidden lg:block">
      <UiButton liquid @on-click="emits('onTweet')">
        <span class="font-bold">
          Tweet
        </span>
      </UiButton>
    </div>

    <div class="mt-6 flex lg:hidden items-center p-3">
      <UiButton @on-click="emits('onTweet')" >
        <UIcon  class="h-6 w-6" name="i-ic-baseline-edit" />
      </UiButton>
    </div>


    <div 
    class="flex flex-row items-center justify-center px-2 py-2 mx-auto mt-auto mb-5 rounded-full cursor-pointer w-14 xl:w-full hover:bg-gray-100 dark:hover:bg-dim-800"
    :class="defaultTransition"
    @click="emits('onLogout')"
    >

      <div class="flex flex-row">
        <img :src="props.user.profileImage" class="w-10 h-10 rounded-full">

        <div class="flex-col hidden ml-2 lg:block ">
          <h1 class="text-sm font-bold text-gray-800 dark:text-white">
            {{ props.user.name }}
          </h1>

          <p class="text-sm text-gray-400">
            {{props.user.handle}}
          </p>
        </div>
      </div>

      <div class="hidden ml-auto lg:flex items-center justify-center">
        <UIcon class="w-6 h-6" name=i-heroicons-chevron-down-16-solid />
      </div>

    </div>

  </div>
</template>

<script setup>
const emits = defineEmits(['onTweet', 'onLogout']);
const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

</script>

<style>

</style>