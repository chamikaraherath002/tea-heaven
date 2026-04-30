<script setup lang="ts">
interface Tea {
  id: number
  title: string
  price: number
  thumbnail: string
  category: string
}

defineProps<{
  tea: Tea | null
  isDark: boolean
}>()

defineEmits<{
  close: []
}>()
</script>

<template>
  <div
    v-if="tea"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click.self="$emit('close')"
  >
    <div :class="isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'" class="rounded-2xl p-6 max-w-md w-full mx-4 shadow-xl">
      <img :src="tea.thumbnail" :alt="tea.title" class="w-full h-56 object-cover rounded-xl mb-4" />
      <h2 class="text-2xl font-bold mb-2">{{ tea.title }}</h2>
      <p :class="isDark ? 'text-amber-400' : 'text-amber-900'" class="font-bold text-xl mb-2">{{ tea.price }} LKR</p>
      <p :class="isDark ? 'text-gray-400' : 'text-gray-500'" class="text-sm mb-2 capitalize">Category: {{ tea.category }}</p>
      <button
        @click="$emit('close')"
        :class="isDark ? 'bg-green-600 hover:bg-green-500' : 'bg-green-700 hover:bg-green-600'"
        class="mt-4 w-full text-white py-2 rounded-full transition-colors"
      >
        Close
      </button>
    </div>
  </div>
</template>