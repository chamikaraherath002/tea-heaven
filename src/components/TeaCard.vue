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
}>()

defineEmits(['click'])
</script>

<template>
  <div 
  class="border rounded-xl overflow-hidden bg-white shadow hover:-translate-y-1 transition-transform cursor-pointer"
  @click="$emit('click')"
>
  <img :src="tea.thumbnail" :alt="tea.title" class="w-full h-48 object-cover" />
    <div class="p-4 text-center">
      <h3 class="font-semibold text-gray-800 mb-1">{{ tea.title }}</h3>
      <p class="text-amber-900 font-bold mb-3">{{ tea.price }} LKR</p>
      <button
        @click.stop.prevent="addToCart(tea)"
        class="bg-amber-900 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors"
      >
        Add to Cart 🛒
      </button>
    </div>
  </div>
</template>