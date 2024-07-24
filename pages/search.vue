<template>


  <MainSection title="Search" :loading="loading">


    
    <TweetListFeed :tweets="searchTweet" />
  </MainSection>


</template>

<script setup>
useSeoMeta({
  title: 'Search'
})

const { getTweets } = useTweets();

const loading = ref(false);
const searchTweet = ref([]);

async function runGetTweets(){
  const searchQuery = useRoute().query.q;
  loading.value = true

  try {
    const { tweets } = await getTweets({
      query: searchQuery
    })
    searchTweet.value = tweets

  } catch (error) {
    console.log(error);

  } finally {
    loading.value = false
  }
}

watch(() => useRoute().fullPath, () => runGetTweets());

onBeforeMount(() => {
  runGetTweets();
})

</script>

<style>

</style>