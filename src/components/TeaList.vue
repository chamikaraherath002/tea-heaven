<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import TeaCard from './TeaCard.vue'
import TeaModal from './TeaModal.vue'

interface Tea {
  id: number
  title: string
  price: number
  thumbnail: string
  category: string
}

const props = defineProps<{
  addToCart: (item: Tea) => void
  isDark: boolean
}>()

const teas = ref<Tea[]>([])
const search = ref('')
const loading = ref(true)
const selectedCategory = ref('all')
const selectedTea = ref<Tea | null>(null)

onMounted(async () => {
  const res = await fetch('https://dummyjson.com/products?limit=10')
  const data = await res.json()

  teas.value = data.products.map((item: any) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    thumbnail: item.thumbnail,
    category: item.category
  }))

  loading.value = false
})

const filteredTeas = computed(() => {
  return teas.value.filter(item => {
    const matchSearch = item.title.toLowerCase().includes(search.value.toLowerCase())
    const matchCategory = selectedCategory.value === 'all' || item.category === selectedCategory.value
    return matchSearch && matchCategory
  })
})
</script>

<template>
  <div class="p-5">
    <input
      v-model="search"
      placeholder="Search tea..."
      :class="isDark ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'"
      class="border px-3 py-2 rounded mb-4 w-52"
    />

    <div class="flex gap-2 mb-4 flex-wrap">
      <button @click="selectedCategory = 'all'" :class="isDark ? 'bg-gray-600' : 'bg-amber-900'" class="px-3 py-1 text-white rounded">All</button>
      <button @click="selectedCategory = 'beauty'" :class="isDark ? 'bg-gray-700' : 'bg-amber-700'" class="px-3 py-1 text-white rounded">Green Tea</button>
      <button @click="selectedCategory = 'fragrances'" :class="isDark ? 'bg-gray-700' : 'bg-amber-700'" class="px-3 py-1 text-white rounded">Herbal Tea</button>
      <button @click="selectedCategory = 'furniture'" :class="isDark ? 'bg-gray-700' : 'bg-amber-700'" class="px-3 py-1 text-white rounded">Flavoured Tea</button>
    </div>

    <p v-if="loading" :class="isDark ? 'text-white' : 'text-gray-800'">Loading...</p>

    <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <TeaCard
        v-for="item in filteredTeas"
        :key="item.id"
        :tea="item"
        :addToCart="props.addToCart"
        :isDark="isDark"
        @click="selectedTea = item"
      />
    </div>

    <TeaModal :tea="selectedTea" :isDark="isDark" @close="selectedTea = null" />
  </div>
</template>