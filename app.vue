<template>
  <div :class="{ dark: enableDarkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full">
  
        <div class="grid grid-cols-12 mx-auto md:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
  
          <!-- left sidebar -->
          <div class="hidden md:block sm:col-span-1 md:col-span-1 lg:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>
  
          <!-- main content -->
           <main class="bg-red-500 col-span-12 md:col-span-8 xl:col-span-6">
             <NuxtPage />
           </main>

          <!-- right sidebar -->
  
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
// import { SidebarLeft } from './.nuxt/components';

const enableDarkMode = ref(false);

</script>
