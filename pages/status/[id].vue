<template>


  <MainSection title="Tweet" :loading="loading">

    <TweetDetails :tweet="tweet" :user="user" />

  </MainSection>


</template>

<script setup>
useSeoMeta({
    title: 'Tweet'
})

const { getTweetById } = useTweets();
const { useAuthUser } = useAuth();
const loading = ref(false);
const tweet = ref(null);
const user = useAuthUser().value;

function getIdFromRoute(){
  return useRoute().params.id
}
async function getTweet(){
  loading.value = true;
  try {
    const response = await getTweetById(getIdFromRoute());
    tweet.value = response.tweet;

  } catch (error) {
    console.log(error);

  } finally {
    loading.value = false;
  }
}

onBeforeMount(() => {
  getTweet();
})

</script>