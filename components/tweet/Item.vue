<template>
  <div @click="navigateTo(`/status/${props.tweet.id}`)">
    
    <TweetItemHeader :tweet="tweet" />
    
    <div :class="tweetBodyWrapper">
      <p 
      class="flex-shrink font-medium w-auto text-gray-800 dark:text-white"
      :class="textSize"
      >
        {{ props.tweet.text }}
      </p>


      <div v-for="image in tweet.mediaFiles" :key="image.id" class="flex my-3 mr-2 border-2 rounded-2xl" :class="twitterBorderColor">
        <img :src="image.url" class="w-full rounded-2xl" alt="">
      </div>



      <div class="mt-2">
        <TweetItemActions
        v-if="!props.hideActions"
        class="z-25" 
        :tweet="tweet" 
        :compact="props.compact"
        :icon-size="iconSize" 
        @on-comment-click="handleCommentClick" />
      </div>
    </div>

  </div>
</template>

<script setup>

const emitter = useEmitter();
const { twitterBorderColor } = useTailwindConfig();
const props= defineProps({
  tweet: {
    type: Object,
    required: true
  },
  compact: {
    type: Boolean,
    default: false
  },
  hideActions: {
    type: Boolean,
    default: false
  },
})

const tweetBodyWrapper = computed(() => props.compact ? 'ml-16' : 'ml-2 mt-2' )
const textSize = computed(() => props.compact ? 'text-base' : 'text-xl font-semibold')
const iconSize = computed(() => props.compact ? 5 : 7)

function handleCommentClick(){
  emitter.$emit('replyTweet', props.tweet);
}

</script>

<style>

</style>