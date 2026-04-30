<script setup lang="ts">
interface Tea {
  id: number
  title: string
  price: number
  thumbnail: string
  category: string
}

defineProps<{
  tea: Tea
  addToCart: (item: Tea) => void
  isDark: boolean
}>()

defineEmits<{
  click: []
}>()
</script>

<template>
  <div
    :class="isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-800 border-gray-200'"
    class="border rounded-xl overflow-hidden shadow hover:-translate-y-1 transition-transform cursor-pointer"
    @click="$emit('click')"
  >
    <img :src="tea.thumbnail" :alt="tea.title" class="w-full h-48 object-cover" />
    <div class="p-4 text-center">
      <h3 class="font-semibold mb-1">{{ tea.title }}</h3>
      <p :class="isDark ? 'text-amber-400' : 'text-amber-900'" class="font-bold mb-3">{{ tea.price }} LKR</p>
      <button
        @click.stop.prevent="addToCart(tea)"
        :class="isDark ? 'bg-green-600 hover:bg-green-500' : 'bg-green-700 hover:bg-green-600'"
        class="text-white px-4 py-2 rounded-full transition-colors"
      >
        Add to Cart 🛒
      </button>
    </div>
  </div>
</template>