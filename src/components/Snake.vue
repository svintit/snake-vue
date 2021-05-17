<template>
  <div class="main">
    <div class="title">SNAKE</div>
    <Board />
  </div>
</template>

<script>
import Board from './Board.vue'

export default {
  name: 'Snake',
  components: { Board },
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  overflow: hidden;
}

.title {
  font-size: 100px;
  color: white;
  letter-spacing: 10px;
  font-weight: bold;
  margin-bottom: 30px;
}
</style>
