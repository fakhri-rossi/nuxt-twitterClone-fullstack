<template>
  <div>


    <TweetItem :tweet="props.tweet" />

    <TweetForm :user="props.user" place-holder="Type your reply..." :reply-to="props.tweet"
      @on-success="handleFormSuccess" />

    <TweetListFeed :tweets="tweets" empty-tweet-message="No replies" :show-reply-to="false" />


  </div>


</template>

<script setup>
const { redirectToTweetId } = useTweets();

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

function handleFormSuccess(tweet) {
  redirectToTweetId(tweet.id);
}

</script>

<style></style>