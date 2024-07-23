<template>
  <div class="h-screen flex flex-col">

    <div class=" p-2 my-2 rounded-full hover:bg-blue-100 w-min
    dark:hover:bg-white/20" :class="transition">
      <NuxtLink to="/">
        
        <div class="w-8 h-8">
          <LogoTwitter />
        </div>
  
      </NuxtLink>
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

  </div>
</template>

<script setup>
const transition = useTailwindConfig().defaultTransition;
const emits = defineEmits(['onTweet']);

</script>

<style>

</style>