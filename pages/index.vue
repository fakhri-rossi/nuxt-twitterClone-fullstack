<template>


  <MainSection title="Home" :loading="loading">

    <TweetForm 
    :user="user" 
    place-holder="Type something..." 
    class="border-b" 
    :class="twitterBorderColor" 
    @on-success="handleFormSuccess"
    />
    
    <TweetListFeed :tweets="homeTweets" />
  </MainSection>


</template>

<script setup>
useSeoMeta({
  title: 'Home/Tweet'
})

const { twitterBorderColor } = useTailwindConfig();
const { getTweets, redirectToTweetId } = useTweets();

const user = useAuth().useAuthUser()
const loading = ref(false);
const homeTweets = ref([]);
const searchQuery = useRoute().query.q;

onBeforeMount(async () => {
  loading.value = true
  try {
    const { tweets } = await getTweets();
    homeTweets.value = tweets

  } catch (error) {
    console.log(error);

  } finally {
    loading.value = false
  }
})

function handleFormSuccess(tweet){
  redirectToTweetId(tweet.id);
}
</script>

<style>

</style>