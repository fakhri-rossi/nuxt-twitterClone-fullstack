<template>
  <div 
  class="flex items-center text-gray-400 cursor-pointer justify-around"
  :class="[defaultTransition, twitterBorderColor]"
  >

    <div v-for="(action, i) in actions" 
    :key="i"
    class="group flex items-center"
    >

      <!-- icon -->
      <div 
      :class="`flex items-center p-2 rounded-full group-hover:bg-${action.color}-100 group-hover:text-${action.color}-400 dark:group-hover:bg-opacity-20`"
      @click.prevent.stop="action.click"
      >
        <UIcon 
        :class="`w-${props.iconSize} h-${props.iconSize}`"
        :name="action.icon" 
        />
      </div>
      
      <!-- text -->
      <span 
      v-if="showStats"
      :class="`ml-1 group-hover:text-${action.color}-400`">
        {{ action.text }}
      </span>
      
    </div>

  </div>
</template>

<script setup>
const { defaultTransition, twitterBorderColor } = useTailwindConfig();
const props = defineProps({
  tweet: {
    type: Object,
    required: true
  },
  compact: {
    type: Boolean,
    default: false
  },
  iconSize: {
    type: Number,
    default: 5
  },
})

function generateRandomNumber(){
  return Math.floor( Math.random() * 100 )
}
function emptyClick(){
  console.log('This action isnt clear yet');
}

const showStats = computed(() => props.compact);
const emits = defineEmits(['onCommentClick']);

const actions = [
  {
    name: 'Comment',
    icon: 'i-heroicons-chat-bubble-oval-left-ellipsis',
    text: props.tweet.repliesCount,
    color: 'blue',
    click: () => emits('onCommentClick')
  },
  {
    name: 'Re-tweet',
    icon: 'i-ic-outline-sync',
    text: generateRandomNumber(),
    color: 'green',
    click: () => emptyClick()
  },
  {
    name: 'Like',
    icon: 'i-ic-baseline-favorite-border',
    text: generateRandomNumber(),
    color: 'red',
    click: () => emptyClick()
  },
  {
    name: 'Share',
    icon: 'i-ic-baseline-ios-share',
    text: generateRandomNumber(),
    color: 'blue',
    click: () => emptyClick()
  },
]

</script>

<style>

</style>