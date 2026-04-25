<template>
  <div style="border: 1px solid #ccc; padding: 10px; width: 200px;">
    <img :src="tea.thumbnail" alt="tea" style="width: 100%;" />
    <h3>{{ tea.title }}</h3>
    <p>${{ tea.price }}</p>
  </div>
</template>

<script setup>
defineProps({
  tea: Object
})
</script>s