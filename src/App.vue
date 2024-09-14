<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useCounterStore } from './stores/counter'

const userStore = useCounterStore()
console.log(userStore.count)
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
html:focus-within {
  scroll-behavior: smooth;
}
@media(prefers-reduced-notion){
  html:focus-within {
  scroll-behavior: auto;
}
}
</style>
