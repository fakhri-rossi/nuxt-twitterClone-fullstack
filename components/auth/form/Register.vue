<template>
  <div class="w-full">
    <h1 class="font-bold text-3xl text-center">Register</h1>

    <UiAlert 
    class="mt-4" 
    v-if="showAlert" />

    <div v-if="data.loading" class="flex items-center justify-center h-20">
      <UiSpinner />
    </div>


    <div class="pt-5 space-y-6" :class="hiddenForm">     

      <!-- email -->
      <UiInputText 
      name="email" 
      label="Email" 
      v-model="data.email"
      placeholder="email" 
      type="email" />
      
      <!-- username -->
      <UiInputText 
      name="username" 
      label="Username" 
      v-model="data.username"
      placeholder="username" 
      type="text" />
      
      <!-- name -->
      <UiInputText 
      name="name" 
      label="Name" 
      v-model="data.name"
      placeholder="name" 
      type="text" />
      
      <!-- password -->
      <UiInputText 
      name="password" 
      label="Password" 
      v-model="data.password"
      placeholder="*******" 
      type="password" />
      
      <!-- repeat password -->
      <UiInputText 
      name="repeatPassword" 
      label="Repeat Password" 
      v-model="data.repeatPassword"
      placeholder="*******" 
      type="password" />


      <UiButton 
      liquid 
      @on-click="handleRegister"
      :disabled="isButtonDisabled" >
        Register
      </UiButton>

    </div>
  </div>
</template>

<script setup>
const { register } = useAuth();
const { showAlert } = useAlert();

const data = reactive({
  email : '',
  username: '',
  name: '',
  password: '',
  repeatPassword: '',
  loading: false
})

const hiddenForm = computed(() => {
  return data.loading ? 'hidden' : 'block';
})

const handleRegister = async () => {
  data.loading = true;

  try {
    await register({ 
      username: data.username, 
      password: data.password,
      repeatPassword: data.repeatPassword,
      name: data.name,
      email: data.email,
    });

  } catch (error) {
    console.log(error);

  } finally {
    data.loading = false;
  }
}

const isButtonDisabled = computed(() => {
  return (!data.username || !data.password || !data.email || !data.name || !data.repeatPassword) || data.loading
})
</script>

<style>

</style>