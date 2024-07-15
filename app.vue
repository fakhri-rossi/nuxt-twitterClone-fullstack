<template>
  <div :class="{ dark: enableDarkMode }">
    <div class="min-h-full">

      <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">

        <!-- left sidebar -->
        <div class="hidden bg-red-500 md:block xs-col-span-1 xl:col-span-2">
          <div class="sticky top-0">
            asd
          </div>
        </div>

        <!-- main content -->

        <!-- rigth sidebar -->

      </div>

    </div>
  </div>
</template>

<script setup>
const enableDarkMode = ref(true);

</script>
