<template>
  <div class="snakeBody"></div>
</template>

<script>
export default {
  name: 'SnakeBody',
  props: {
    cellNumber: Number,
    snakePosition: Array
  }
}
</script>

<style scoped>
.snakeBody {
  display: flex;
  min-width: 20px;
  min-height: 20px;
  color: green;
}
</style>
