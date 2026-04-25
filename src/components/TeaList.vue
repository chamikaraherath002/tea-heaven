<script setup>
import { ref, onMounted, computed } from 'vue'
import TeaCard from './TeaCard.vue'

const teas = ref([])
const loading = ref(true)
const search = ref('')

onMounted(async () => {
  try {
    const res = await fetch('https://dummyjson.com/products?limit=10')
    const data = await res.json()

    teas.value = data.products.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price,
      thumbnail: item.thumbnail
    }))
  } finally {
    loading.value = false
  }
})

const filteredTeas = computed(() => {
  return teas.value.filter(item =>
    item.title.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
  <div>
    <h2>Tea List 🍵</h2>

    <!-- 🔍 Search box -->
    <input
      v-model="search"
      placeholder="Search tea..."
      style="padding: 8px; margin-bottom: 15px; width: 200px;"
    />

    <p v-if="loading">Loading teas...</p>

    <div v-else style="display: flex; gap: 20px; flex-wrap: wrap;">
      <TeaCard
        v-for="item in filteredTeas"
        :key="item.id"
        :tea="item"
      />
    </div>
  </div>
</template>