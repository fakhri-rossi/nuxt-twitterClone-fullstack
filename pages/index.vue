<template>


  <MainSection title="Home" :loading="loading">

    <TweetForm 
    :user="user" 
    place-holder="Type something..." 
    class="border-b" 
    :class="twitterBorderColor" 
    />
    
    <TweetListFeed :tweets="homeTweets" />
  </MainSection>


</template>

<script setup>
useSeoMeta({
  title: 'Home/Tweet'
})

const { twitterBorderColor } = useTailwindConfig();
const { getHomeTweets } = useTweets();

const user = useAuth().useAuthUser()
const loading = ref(false);
const homeTweets = ref([]);

onBeforeMount(async () => {
  loading.value = true
  try {
    const {tweets} = await getHomeTweets()
    homeTweets.value = tweets

  } catch (error) {
    console.log(error);

  } finally {
    loading.value = false
  }
})
</script>

<style>

</style>