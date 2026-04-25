<template>
  <div style="display: flex; gap: 20px; flex-wrap: wrap;">
    <TeaCard v-for="item in teas" :key="item.id" :tea="item" />
  </div>
</template>

<script setup>
import TeaCard from './TeaCard.vue'

const teas = [
  {
    id: 1,
    title: "Green Tea",
    price: 10,
    thumbnail: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Black Tea",
    price: 12,
    thumbnail: "https://via.placeholder.com/150"
  }
]
</script>