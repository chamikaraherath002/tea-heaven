<script setup lang="ts">
import type { Product } from '../types'

defineProps<{
  cart: Product[]
  isDark: boolean
}>()

defineEmits<{
  toggleDark: []
}>()
</script>

<template>
  <nav :class="isDark ? 'bg-gray-800 text-white' : 'bg-green-700 text-white'" class="px-6 py-4 flex justify-between items-center shadow-md">
    <h1 class="text-2xl font-bold">🛒 Fresh Mart</h1>
    <div class="flex items-center gap-4">
      <button
        @click="$emit('toggleDark')"
        class="bg-white text-green-700 px-3 py-1 rounded-full font-bold text-sm"
      >
        {{ isDark ? '☀️ Light' : '🌙 Dark' }}
      </button>
      <span class="bg-white text-green-700 font-bold px-3 py-1 rounded-full">
        🛒 {{ cart.length }}
      </span>
    </div>
  </nav>
</template>