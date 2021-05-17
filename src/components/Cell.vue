<template>
  <div
    :class="{
      cell: true,
      emptyCell: cell === 'empty',
      lightCell: light,
      foodCell: cell === 'food',
      snakeCell: cell === 'snake',
    }"
  />
</template>

<script>
export default {
  name: 'Cell',
  props: {
    cell: String,
    light: Boolean
  },
  setup() {

    return {
    }
  }
}
</script>

<style scoped>
.cell {
  width: 20px;
  height: 20px;
  border: 1px solid #19172a;
}

.emptyCell {
  background-color: #19172a;
}

.lightCell {
  background-color: #262340;
}

.foodCell {
  border-radius: 10px;
  background-color: pink;
}

.snakeCell {
  background-color: green;
}
</style>
