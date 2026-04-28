<script setup lang="ts">
defineProps<{
  cart: any[]
}>()
</script>

<template>
  <nav class="bg-amber-900 text-white px-6 py-4 flex justify-between items-center">
    <h1 class="text-xl font-bold">🍵 Tea Heaven</h1>
    <span class="bg-white text-amber-900 font-bold px-3 py-1 rounded-full">
      🛒 {{ cart.length }}
    </span>
  </nav>
</template>