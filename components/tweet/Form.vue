<template>
  <div>

    <div v-if="loading" class="flex items-center justify-center py-6">
      <UiSpinner />
    </div>

    <div v-else>
      <TweetItem 
      v-if="props.replyTo && props.showReply" 
      :tweet="props.replyTo"
      hideActions />

      <TweetInput :user="props.user" :place-holder="props.placeHolder" @on-submit="handleFormSubmit" />
    </div>

  </div>
</template>

<script setup>
const emits = defineEmits(['onSuccess']);
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
  },
  replyTo: {
    type: Object,
    default: null
  },
  showReply: {
    type: Boolean,
    default: false
  },
})

async function handleFormSubmit(data){
  loading.value = true;
  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mediaFiles,
      replyTo: props.replyTo?.id
    });
    emits('onSuccess', response.tweet);
    
  } catch (error) {
    console.log(error);
  } finally{
    loading.value = false;
  }
}
</script>

<style>

</style>