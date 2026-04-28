<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'

const cart = ref<any[]>([])
const isDark = ref(false)

function addToCart(item: any) {
  cart.value.push(item)
}

function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <div :class="isDark ? 'dark bg-gray-900 min-h-screen' : 'bg-gray-50 min-h-screen'">
    <Navbar :cart="cart" :isDark="isDark" @toggleDark="toggleDark" />
    <RouterView v-slot="{ Component }">
      <component :is="Component" :addToCart="addToCart" :isDark="isDark" />
    </RouterView>
  </div>
</template>