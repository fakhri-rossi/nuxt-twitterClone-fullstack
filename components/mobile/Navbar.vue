<template>
  <div class="w-full z-50 py-3 sticky bottom-0 flex items-center bg-white/70 dark:bg-dim-900/70 backdrop-blur-md">

    <div class="flex w-full items-center justify-around">

      <MobileNavbarIcon 
      :icon-name="navMenus.home.icon" 
      :is-active="isHome" 
      :to="navMenus.home.to" />

      <MobileNavbarIcon 
      :icon-name="navMenus.search.icon" 
      :is-active="isSearch" 
      :to="navMenus.search.to" />

      <MobileNavbarIcon 
      :icon-name="navMenus.profile.icon" 
      :is-active="isProfile" 
      :to="navMenus.profile.to" />
      
      
    </div>

  </div>
</template>

<script setup>
import UrlPattern from "url-pattern"

const getCurrentPath = () => {
  return useRoute().path
}

function matchUrl(urlMatch){
  const pattern = new UrlPattern(urlMatch);
  return pattern.match(getCurrentPath())
}

const isHome = ref(matchUrl('/'))
const isSearch = ref(matchUrl('/search') || matchUrl('/status/:id'))
const isProfile = ref(matchUrl('/profile'))

const refreshPath = () => {
  isHome.value = matchUrl('/');
  isSearch.value = matchUrl('/search');
  isProfile.value = matchUrl('/profile');
}

watch(() => useRoute().path, () => refreshPath())


const navMenus = reactive({
  home: {
    isActive: isHome.value,
    icon: 'i-heroicons-home-20-solid',
    to: '/'
  },
  search: {
    isActive: isSearch.value,
    icon: 'i-ic-baseline-search',
    to: '/search'
  },
  profile: {
    isActive: isProfile.value,
    icon: 'i-ic-baseline-account-circle',
    to: '/profile'
  },
})

</script>

<style>

</style>