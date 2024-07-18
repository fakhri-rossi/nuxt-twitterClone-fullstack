<template>
  <!-- <div class="bg-gray-400 flex">
    <h1 class="text-red-500">Hello</h1>
  </div> -->
  <!-- <h1>{{ currRoute }}</h1> -->

  <MainSection title="Home" :loading="loading">
    Content
  </MainSection>
  <button @click="getUser">Get User!</button>
</template>

<script setup>
const currRoute = useRoute().path
const loading = ref(false)

const getUser = async () => {
  const data = await $fetch('/api/auth/user', {
    method: 'GET'
  })

  console.log(data);
}
</script>

<style>

</style>