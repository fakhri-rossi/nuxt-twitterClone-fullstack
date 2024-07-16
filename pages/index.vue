<template>
  <!-- <div class="bg-gray-400 flex">
    <h1 class="text-red-500">Hello</h1>
  </div> -->
  <h1>{{ currRoute }}</h1>
</template>

<script setup>
const currRoute = useRoute().path
</script>

<style>

</style>