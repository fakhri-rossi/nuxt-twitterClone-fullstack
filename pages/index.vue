<template>
  <MainSection title="Home" :loading="loading">
    {{ user }}
  </MainSection>
  <button @click="getUser">Get User!</button>
</template>

<script setup>
const user = useAuth().useAuthUser()
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