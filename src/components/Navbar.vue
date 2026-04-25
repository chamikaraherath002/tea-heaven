<template>
  <div>
    <h2>Tea Heaven</h2>
    <p>Cart: {{ cart.length }}</p>
  </div>
</template>

<script setup>
defineProps({
  cart: Array
})
</script>