<script setup>
import { ref, onMounted, computed } from 'vue'
import TeaCard from './TeaCard.vue'

const props = defineProps({
  addToCart: Function
})

const teas = ref([])
const search = ref('')
const loading = ref(true)

onMounted(async () => {
  const res = await fetch('https://dummyjson.com/products?limit=10')
  const data = await res.json()

  teas.value = data.products.map(item => ({
    id: item.id,
    title: item.title,
    price: item.price,
    thumbnail: item.thumbnail
  }))

  loading.value = false
})

const filteredTeas = computed(() =>
  teas.value.filter(item =>
    item.title.toLowerCase().includes(search.value.toLowerCase())
  )
)
</script>

<template>
  <div>
    <input v-model="search" placeholder="Search tea..." />

    <p v-if="loading">Loading...</p>

    <div v-else style="display:flex; gap:20px; flex-wrap:wrap;">
      <TeaCard
        v-for="item in filteredTeas"
        :key="item.id"
        :tea="item"
        :addToCart="props.addToCart"
      />
    </div>
  </div>
</template>