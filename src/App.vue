<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'

const cart = ref<any[]>([])

function addToCart(item: any) {
  cart.value.push(item)
}
</script>

<template>
  <div>
    <Navbar :cart="cart" />
    <RouterView v-slot="{ Component }">
      <component :is="Component" :addToCart="addToCart" />
    </RouterView>
  </div>
</template>