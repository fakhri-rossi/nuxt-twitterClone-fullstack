<template>
  <div>

    <div class="pt-5 space-y-6">     

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

      <div>
        <button @click="handleLogin">Login</button>
      </div>

    </div>

  </div>
</template>

<script setup>
const { login } = useAuth();
const data = reactive({
  username: '',
  password: '',
  loading: false
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
</script>

<style>

</style>