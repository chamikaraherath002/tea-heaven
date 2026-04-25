<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import TeaList from './components/TeaList.vue'

const cart = ref([])

function addToCart(item) {
  cart.value.push(item)
}
</script>

<template>
  <div>
    <Navbar :cart="cart" />

    <h1>Welcome to Tea Heaven 🍵</h1>

    <TeaList :addToCart="addToCart" />
  </div>
</template>