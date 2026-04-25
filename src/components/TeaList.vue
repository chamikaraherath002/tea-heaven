<script setup>
import { ref, onMounted } from 'vue'
import TeaCard from './TeaCard.vue'

const teas = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('https://dummyjson.com/products?limit=10')
    const data = await res.json()

    // map API data into your tea format
    teas.value = data.products.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price,
      thumbnail: item.thumbnail
    }))
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <h2>Tea List 🍵</h2>

    <p v-if="loading">Loading teas...</p>

    <div v-else style="display: flex; gap: 20px; flex-wrap: wrap;">
      <TeaCard
        v-for="item in teas"
        :key="item.id"
        :tea="item"
      />
    </div>
  </div>
</template>