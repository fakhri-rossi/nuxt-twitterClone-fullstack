<template>
  <div class="w-full">

    <div class="flex justify-center items-center">
      <div class="w-10 h-10">
        <LogoTwitter />
      </div>
    </div>

    <AuthFormLogin v-if="loginForm" />


    <AuthFormRegister v-else />

    <div class="flex items-center justify-center mt-5">
      <p v-if="loginForm">
        Don't have an account?
        <span @click="handleSwitch(() => loginForm = false)" class="text-blue-400 cursor-pointer">Register here</span>
      </p>

      <p v-else>
        Have an account?
        <span @click="handleSwitch(() => loginForm = true)" class="text-blue-400 cursor-pointer">Login here</span>
      </p>
    </div>

  </div>
</template>

<script setup>
const { turnOffAlert } = useAlert();
const loginForm = ref(true)

onBeforeMount(() => {
  turnOffAlert();
})

function handleSwitch(callback) {
  turnOffAlert();
  callback();
}
</script>

<style></style>