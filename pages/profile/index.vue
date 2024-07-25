<template>

  <MainSection 
  :title="`Profile`" class="border-b" 
  :class="twitterBorderColor" 
  :loading="loading">
    
    <!-- <div class="w-full flex items-center pl-4 border-b" :class="twitterBorderColor">
      <h1 class="font-bold text-lg">
        {{ user.name }}
      </h1>
    </div> -->

    <div class="p-4 pt-0">

      <div class="flex items-center w-full gap-3">

        <!-- profile pict -->
        <img class="h-14 w-14 rounded-full" :src="user.profileImage">

        <!-- head infos -->
        <div class="w-full flex justify-around">

          <div 
          class="flex flex-col items-center" 
          v-for="headInfo in headInfos">
            <h3 class="font-bold text-gray-800 dark:text-white">{{ headInfo.label }}</h3>

            <p class="text-sm text-gray-800 dark:text-white">{{headInfo.value}}</p>
          </div>

        </div>

      </div>
      
      <div class="mt-3 px-1">
        <h2 class="font-bold text-lg">
          {{ user.name }}
        </h2>

        <p class="font-normal text-xs">
          {{ user.handle }}
        </p>
      </div>
      
    </div>

    <div class="flex w-full px-4 justify-end items-center">
      <UiButton @on-click="handleLogoutClick" class="bg-red-500" size="sm">Logout</UiButton>
    </div>

    <p class="text-center text-xs text-gray-400">Your Tweets</p>

    <div class="border-t" :class="twitterBorderColor">
      <div class="flex items-center justify-center w-full">
        <UiSpinner v-if="data.loading" />
      </div>

      <TweetListFeed v-if="!data.loading" :tweets="userTweets"  />
    </div>
      
    </MainSection>

    <!-- <UiDialogModal >
      <div class="bg-red">
        tes123
      </div>
    </UiDialogModal> -->

  <!-- <div v-if="data.showLogout"
  class="sticky z-50 left-0 bg-black/50 w-screen h-screen flex justify-center items-center" >
    <div class="bg-white rounded-xl">
      123
    </div>
  </div> -->

</template>

<script setup>
useSeoMeta({
  title: 'Profile'
})

const data = reactive({
  loading: false,
  showLogout: true
})

// const showTweetModal = usePostTweetModal();

const headInfos = [
  {
    label: 'Following',
    value: 'n/a'
  },
  {
    label: 'Follower',
    value: 'n/a'
  },
  {
    label: 'Tweet',
    value: 'n/a'
  },
]

const { twitterBorderColor } = useTailwindConfig()
const { useAuthUser, logout } = useAuth()
const { getTweetByUserId } = useTweets();
const user = useAuthUser().value;

const userTweets = ref([]);

onBeforeMount( async() => {
  data.loading = true;
  try {
    const { tweets } = await getTweetByUserId(user.id);
    console.log(user.id);
    userTweets.value = tweets;

  } catch (error) {
    console.log(error);

  } finally{
    data.loading = false;
  }

})

function handleLogoutClick(){
  // alert('hello')
  logout()
}

</script>

<style>

</style>