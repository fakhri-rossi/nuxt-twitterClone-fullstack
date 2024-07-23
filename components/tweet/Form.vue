<template>
  <div>

    <div v-if="loading" class="flex items-center justify-center py-6">
      <UiSpinner />
    </div>

    <div v-else>
      <TweetInput :user="props.user" :place-holder="props.placeHolder" @on-submit="handleFormSubmit" />
    </div>

  </div>
</template>

<script setup>
const { postTweet } = useTweets();
const loading = ref(false);

const props = defineProps({
  user: {
    type: Object,
    required: true
  },
  placeHolder: {
    type: String,
    default: 'Type...'
  }
})

async function handleFormSubmit(data){
  loading.value = true;
  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mediaFiles
    });
    alert(JSON.stringify(response));
    
  } catch (error) {
    console.log(error);
  } finally{
    loading.value = false;
  }
}
</script>

<style>

</style>