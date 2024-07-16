<template>
  <div class="flex flex-col gap-3">
    <NuxtLink v-for="(menu, i) in menus" :key="i" :to="menu.to" class="flex items-center p-3 gap-3 rounded-full hover:bg-gray-200 tet-black dark:hover:bg-dim-200 dark:text-white" :class="useTailwindConfig().defaultTransition">
      
      <UIcon class="w-6 h-6" :name="menu.active ? menu.icon_active : menu.icon" />
  
      <div class="hidden lg:block text-lg" :class="activeTab(menu.active)">
        {{ menu.label }}
      </div>
  
    </NuxtLink>
  </div>
</template>

<script setup>

const menus = [
  { label: 'Home', icon_active: 'i-heroicons-home-20-solid', icon:'i-heroicons-home', to: '#', active: true },
  { label: 'Explore', icon_active: 'i-heroicons-hashtag-16-solid', icon:'i-heroicons-hashtag-20-solid', to: '#', active: false },
  { label: 'Notification', icon_active: 'i-heroicons-bell-20-solid', icon:'i-heroicons-bell', to: '#', active: false },
  { label: 'Messages', icon_active: 'i-heroicons-chat-bubble-oval-left-16-solid', icon:'i-heroicons-chat-bubble-oval-left', to: '#', active: false },
  { label: 'Bookmarks', icon_active: 'i-heroicons-bookmark-20-solid', icon:'i-heroicons-bookmark', to: '#', active: false },
  { label: 'Lists', icon_active: 'i-heroicons-document-text-solid', icon:'i-heroicons-document-text', to: '#', active: false },
  { label: 'Profile', icon_active: 'i-ic-baseline-person', icon:'i-ic-baseline-person-outline', to: '#', active: false },
  { label: 'More', icon_active: 'i-heroicons-ellipsis-horizontal-circle-16-solid', icon:'i-heroicons-ellipsis-horizontal-circle', to: '#', active: false },
]

const activeTab = (active) => active ? 'font-bold' : '';
</script>

<style>

</style>