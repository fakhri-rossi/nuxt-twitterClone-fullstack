<template>
  <div class="flex flex-col">
    
    <!-- preview card: what's happening -->
    <CardPreview title="What's Happening">
      <CardItem v-for="(item, i) in happeningItems" :key="i" :title="item.title" :count="item.count" />
    </CardPreview>


    <!-- preview card: who to follow -->
    <CardPreview title="Who to follow">
      <CardItem2 v-for="(item, i) in followItems" :key="i" :name="item.name" :username="item.username" :img-src="item.imgSrc" />        
    </CardPreview>
  </div>
</template>

<script setup>
const happeningItems = ref([
  {
    title: 'SpaceX',
    count: '19.7k Tweets'
  },
  {
    title: '#CodingIsFun',
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
    name: 'Joe Boey',
    username: '@joeBidey',
    imgSrc: 'https://picsum.photos/200/200'
  },
  {
    name: 'Joe Boey',
    username: '@joeBidey',
    imgSrc: 'https://picsum.photos/200/200'
  },
])
</script>

<style>

</style>