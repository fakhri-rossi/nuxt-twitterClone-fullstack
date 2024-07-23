<template>
  <div>


    <TweetItem :tweet="props.tweet" />

    <TweetForm :user="props.user" place-holder="Type your reply..." />

    <TweetListFeed :tweets="tweets" empty-tweet-message="No replies" />


  </div>


</template>

<script setup>
const props = defineProps({
  tweet: {
    type: Object,
    required: true
  },
  user: {
    type: Object,
    required: true
  },
})

const tweets = computed(() => props.tweet?.replies || []);
</script>

<style>

</style>