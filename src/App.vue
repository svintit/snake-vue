<template>
  <Snake  />
</template>

<script>
import Snake from './components/Snake.vue'

export default {
  name: 'App',
  components: {
    Snake
  }
}
</script>

<style>
html, body {
  background-color: #19172a;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
