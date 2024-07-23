<template>
  <div>
    <!-- <div class="pb-5"> -->
      <div v-if="isTweetEmpty" class="text-center p-4 text-gray-500"> 
        {{ props.emptyTweetMessage }}
      </div>

      <TweetItem 
      v-else
      class="pb-4 border-b hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-300"
      :class="[twitterBorderColor, defaultTransition]"
      v-for="tweet in props.tweets" 
      :tweet="tweet" 
      :key="tweet.id" 
      compact/>
    <!-- </div> -->
  </div>
</template>

<script setup>
const {defaultTransition, twitterBorderColor} = useTailwindConfig()
const props = defineProps({
  tweets: {
    type: Array,
    required: true
  },
  emptyTweetMessage: {
    type: String,
    default: 'No Tweets 😥'
  }
})

const isTweetEmpty = computed(() => props.tweets.length === 0);
</script>

<style>

</style>