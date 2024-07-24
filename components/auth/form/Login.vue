<template>
  <div class="w-full">
    <h1 class="font-bold text-3xl text-center">Login</h1>

    <UiAlert 
    class="mt-4" 
    v-if="showAlert" />

    <div v-if="data.loading" class="flex items-center justify-center h-20">
      <UiSpinner />
    </div>

    <div class="pt-5 space-y-6" :class="hiddenForm">
      
      <UiSpinner v-if="data.loading" />

      <UiInputText 
      name="username" 
      label="Username" 
      v-model="data.username"
      placeholder="username" 
      type="text" />

  
      <UiInputText 
      name="password" 
      label="Password" 
      v-model="data.password"
      placeholder="*******" 
      type="password" />

      <UiButton 
      liquid 
      @on-click="handleLogin"
      :disabled="isButtonDisabled" >
        Login
      </UiButton>

    </div>
  </div>
</template>

<script setup>
const { login } = useAuth();
const { showAlert } = useAlert();

const data = reactive({
  username: '',
  password: '',
  loading: false
})

const hiddenForm = computed(() => {
  return data.loading ? 'hidden' : 'block';
})

const handleLogin = async () => {
  data.loading = true;

  try {
    await login({ 
      username: data.username, 
      password: data.password
    });

  } catch (error) {
    console.log(error);

  } finally {
    data.loading = false;
  }
}

const isButtonDisabled = computed(() => {
  return (!data.username || !data.password) || data.loading
})
</script>

<style>

</style>