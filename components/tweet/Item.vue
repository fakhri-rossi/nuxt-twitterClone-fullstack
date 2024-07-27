<template>
  <div @click="navigateTo(`/status/${props.tweet.id}`)">

    <TweetItemHeader :tweet="tweet" />

    <div :class="tweetBodyWrapper">

      <!-- display replyTo -->
      <div v-if="props.tweet.replyTo && props.showReplyTo"
        class="flex flex-col justify-center ml-2 mr-4 mb-2 border-l border-blue-400">
        <div class="flex py-2 rounded-md ml-2 pl-2 bg-gray-100 dark:bg-dim-700">
          <p>{{ props.tweet.replyTo.text }}</p>
        </div>

        <div v-if="props.tweet.replyTo.mediaFiles.length > 0" class="ml-2 py-2">
          <div v-for="image in props.tweet.replyTo.mediaFiles" :key="image.id"
            class="flex my-3 mr-2 border-2 rounded-2xl" :class="twitterBorderColor">
            <img :src="image.url" class="w-full rounded-2xl" alt="">
          </div>
        </div>

      </div>

      <p class="flex-shrink font-medium w-auto text-gray-800 dark:text-white" :class="textSize">
        {{ props.tweet.text }}
      </p>


      <div v-for="image in tweet.mediaFiles" :key="image.id" class="flex my-3 mr-2 border-2 rounded-2xl"
        :class="twitterBorderColor">
        <img :src="image.url" class="w-full rounded-2xl" alt="">
      </div>



      <div class="mt-2">
        <TweetItemActions v-if="!props.hideActions" class="z-10" :tweet="tweet" :compact="props.compact"
          :icon-size="iconSize" @on-comment-click="handleCommentClick" />
      </div>
    </div>

  </div>
</template>

<script setup>

const emitter = useEmitter();
const { twitterBorderColor } = useTailwindConfig();
const props = defineProps({
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
  showReplyTo: {
    type: Boolean,
    default: true
  },

})

const tweetBodyWrapper = computed(() => props.compact ? 'ml-16' : 'ml-2 mt-2')
const textSize = computed(() => props.compact ? 'text-base' : 'text-xl font-semibold')
const iconSize = computed(() => props.compact ? 5 : 7)

function handleCommentClick() {
  emitter.$emit('replyTweet', props.tweet);
}

</script>

<style></style>