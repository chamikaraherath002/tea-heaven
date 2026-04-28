<script setup lang="ts">
interface Tea {
  id: number
  title: string
  price: number
  thumbnail: string
  category: string
  description?: string
}

defineProps<{
  tea: Tea | null
}>()

defineEmits<{
  close: []
}>()
</script>

<template>
  <div v-if="tea" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click.self="$emit('close')">
    <div class="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-xl">
      <img :src="tea.thumbnail" :alt="tea.title" class="w-full h-56 object-cover rounded-xl mb-4" />
      <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ tea.title }}</h2>
      <p class="text-amber-900 font-bold text-xl mb-2">{{ tea.price }} LKR</p>
      <p class="text-gray-500 text-sm mb-2 capitalize">Category: {{ tea.category }}</p>
      <button
        @click="$emit('close')"
        class="mt-4 w-full bg-amber-900 text-white py-2 rounded-full hover:bg-amber-700 transition-colors"
      >
        Close
      </button>
    </div>
  </div>
</template>