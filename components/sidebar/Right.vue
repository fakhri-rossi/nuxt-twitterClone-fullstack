<template>
  <div class="flex flex-col">

    <!-- Search bar -->
     <div class="relative m-2">
      
      <div class="absolute flex items-center pl-4 h-full text-gray-600 cursor-pointer">
        <UIcon 
        class="w-6 h-6" 
        name="i-ic-twotone-search" 
        @click="handleSearch" />
      </div>

      <input 
      type="text"
      @keyup.enter="handleSearch"
      v-model="search"
      class="flex items-center w-full pl-12 text-sm font-normal text-black dark:text-gray-100 bg-gray-200 rounded-full shadow border border-gray-200 dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border focus:border-blue-200 h-9" 
      placeholder="Search twitter" >

     </div>
    
    <!-- preview card: what's happening -->
    <CardPreview title="What's Happening">
      <CardItem v-for="(item, i) in happeningItems" :key="i" :title="item.title" :count="item.count" />
    </CardPreview>


    <!-- preview card: who to follow -->
    <CardPreview title="Who to follow">
      <CardItem2 v-for="(item, i) in followItems" :key="i" :name="item.name" :username="item.username" :img-src="item.imgSrc" />        
    </CardPreview>

    <footer>
      <ul class="mx-2 my-4 text-xs text-gray-500 ">
        <li v-for="footerItem in footerItems" class="inline-block mx-2">
          <a href="" class="hover:underline">{{ footerItem.name }}</a>
        </li>


        <li class="inline-block mx-2">
          &copy; 2024 Twitter, Inc.
        </li>
      </ul>
    </footer>

  </div>
</template>

<script setup>
const search = ref('');

const happeningItems = ref([
  {
    title: 'SpaceX',
    count: '19.7k Tweets'
  },
  {
    title: '#PressFForRossi',
    count: '10.7k Tweets'
  },
  {
    title: '#ArtIsBlast',
    count: '10.7k Tweets'
  },
]);

const followItems = ref([
  {
    name: 'Fakhri Rossi',
    username: '@fkhr_rossi',
    imgSrc: 'https://picsum.photos/200/200'
  },
  {
    name: 'Rossi Stark',
    username: '@rosstark',
    imgSrc: 'https://picsum.photos/200/200'
  },
  {
    name: 'Rossi Musk',
    username: '@rosmusk',
    imgSrc: 'https://picsum.photos/200/200'
  },
])

const footerItems = [
  {
    name: 'Privacy Policy',
  },
  {
    name: 'Cookie Policy',
  },
  {
    name: 'Accessability',
  },
  {
    name: 'Ads Info',
  },
  {
    name: 'More',
  },
]

function handleSearch(){
  useRouter().push({
    path: '/search',
    query: {
      q: search.value
    }
  })
}
</script>

<style>

</style>