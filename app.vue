<template>
  <div :class="{ dark: enableDarkMode }">
    <div class="bg-white dark:bg-dim-900">

      <!-- Loading -->
       <LoadingPage v-if="isLoading" />

      <!-- main app -->
      <div v-else-if="user" class="min-h-full">
  
        <div class="grid grid-cols-12 mx-auto md:px-4 lg:max-w-7xl lg:px-8 gap-3 lg:gap-5">
  
          <!-- left sidebar -->
          <div class="hidden md:block sm:col-span-1 md:col-span-1 lg:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft 
              :user="user" 
              @on-tweet="handleOpenTweetModal" />
            </div>
          </div>
  
          <!-- main content -->
           <main class="col-span-12 md:col-span-8 lg:col-span-6">
             <NuxtPage />
           </main>

          <!-- right sidebar -->
          <div class="hidden md:block md:col-span-3 lg:col-span-4">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>

      <!-- auth page -->
      <div v-else>
        <AuthPage />  


      </div>


      <UiDialogModal 
      :isOpen="showTweetModal"
      @on-close="handleCloseModal" >

        <TweetForm 
        :user="user" 
        :replyTo="replyTweet"
        showReply
        placeHolder="Type something..." 
        @onSuccess="handleFormSuccess" />

      </UiDialogModal>

      <MobileNavbar v-if="isMobile && user && !isDesktop" />

    </div>
  </div>
</template>

<script setup>
const enableDarkMode = ref(false);
const { isMobile, isDesktop } = useDevice();

const { useAuthUser, initAuth, useAuthLoading, logout } = useAuth();
const { usePostTweetModal, closePostTweetModal, openPostTweetModal, redirectToTweetId, useReplyTweet } = useTweets();

const user = useAuthUser();
const isLoading = useAuthLoading();
const showTweetModal = usePostTweetModal();
const emitter = useEmitter();
const replyTweet = useReplyTweet();

emitter.$on('replyTweet', (tweet) => {
  openPostTweetModal(tweet);
})

onBeforeMount(() => {
  initAuth();
})

function handleFormSuccess(tweet){
  closePostTweetModal();
  redirectToTweetId(tweet.id);
}

function handleCloseModal(){
  closePostTweetModal();
}

function handleOpenTweetModal(){
  openPostTweetModal(null);
}

function handleUserLogout(){
  logout();
}

</script>
