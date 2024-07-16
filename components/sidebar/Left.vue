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

  </div>
</template>

<script setup>
const transition = useTailwindConfig().defaultTransition;


</script>

<style>

</style>