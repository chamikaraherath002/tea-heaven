<script setup lang="ts">
defineProps<{
  cart: any[]
  isDark: boolean
}>()

defineEmits<{
  toggleDark: []
}>()
</script>

<template>
  <nav :class="isDark ? 'bg-gray-800 text-white' : 'bg-amber-900 text-white'" class="px-6 py-4 flex justify-between items-center">
    <h1 class="text-xl font-bold">🍵 Tea Heaven</h1>
    <div class="flex items-center gap-4">
      <button
        @click="$emit('toggleDark')"
        class="bg-white text-amber-900 px-3 py-1 rounded-full font-bold text-sm"
      >
        {{ isDark ? '☀️ Light' : '🌙 Dark' }}
      </button>
      <span class="bg-white text-amber-900 font-bold px-3 py-1 rounded-full">
        🛒 {{ cart.length }}
      </span>
    </div>
  </nav>
</template>