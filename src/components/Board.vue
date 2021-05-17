<template>
  <div>
    <div class="stats">
      Stats: { Highscore: {{ highScore }}, Current Score: {{ currentScore }} }
    </div>
    <div
      v-for="(row, rowIdx) in grid"
      :key="[row, rowIdx]"
      class="row"
    >
      <div
        v-for="(cell, cellIdx) in row"
        :key="[cell, cellIdx]"
      >
        <Cell :cell="cell" :light="(rowIdx + cellIdx) % 2 === 0" />
      </div>
    </div>
    <div
      v-if="gameOver"
      class="gameOver"
    >
      Game Over
      <button
        @click="restart"
        class="restartButton"
      >
        Restart
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue'
import Cell from './Cell'

export default {
  name: 'Board',
  components: { Cell },
  setup() {
    const gridSize = 34
    const speed = 200
    const snakeHead = 0
    const gameOver = ref(false)

    const highScore = ref(0)
    const currentScore = ref(0)

    const getRandomInt = (max) => {
      return Math.floor(Math.random() * Math.floor(max))
    }

    const grid = ref()
    const setGrid = () => {
      grid.value = [...Array(gridSize)].map(() => [...Array(gridSize)].map(() => "empty"))
    }
    setGrid()

    const snakePosition = ref()
    const setSnakePosition = () => {
      snakePosition.value = [[getRandomInt(gridSize), getRandomInt(gridSize)]]
    }
    setSnakePosition()

    watch(snakePosition, () => {
      for (let i = 0; i < grid.value.length; i++) {
        for (let k = 0; k < grid.value.length; k++) {
          if (grid.value[i][k] === "snake") {
            grid.value[i][k] = "empty";
          }
        }
      }

      snakePosition.value.forEach(([x, y]) => {
        grid.value[x][y] = "snake";
      });
    })

    const setRandomFood = (amount = 1) => {
      for (let i = 0; i < amount; i++) {
        grid.value[getRandomInt(gridSize)][getRandomInt(gridSize)] = "food"
      }
    }
    setRandomFood(5)

    const direction = ref()
    const setDirection = () => {
      direction.value = [0, 1]
    }
    setDirection()

    const restart = () => {
      setGrid()
      setSnakePosition()
      setDirection()
      setRandomFood(5)
      gameOver.value = false
      currentScore.value = 0
      run(speed)
    }

    const run = (speed) => {
      setTimeout(() => {
        const [x, y] = snakePosition.value[snakeHead]
        const [dx, dy] = direction.value

        const newHead = [dx + x, y + dy]

        const isOutOfBounds = (cell) => {
          return cell < 0 || cell > gridSize - 1
        }

        if (isOutOfBounds(newHead[0]) || isOutOfBounds(newHead[1])) {
          gameOver.value = true
          return
        }

        const foodEaten = ref(false)
        if (grid.value[newHead[0]][newHead[1]] === "food") {
          foodEaten.value = true
          setRandomFood()

          currentScore.value += 1
          if (currentScore.value > highScore.value) highScore.value += 1
        }

        const snakeBody = ref(snakePosition.value.slice(0, snakePosition.value.length - (foodEaten.value ? 0 : 1)))
        if (snakeBody.value.some((x) => x[0] === newHead[0] && x[1] === newHead[1])) {
          gameOver.value = true
          return
        }

        snakePosition.value = [newHead, ...snakeBody.value]

        run(speed - (snakePosition.value.length + 1))
      }, speed)
    }

    onMounted(() => {
      run(speed)
    })

    window.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'ArrowDown':
          direction.value = [1, 0]
          break
        case 'ArrowLeft':
          direction.value = [0, -1]
          break
        case 'ArrowRight':
          direction.value = [0, 1]
          break
        case 'ArrowUp':
          direction.value = [-1, 0]
          break
      }
    })

    return {
      grid,
      restart,
      gameOver,
      highScore,
      currentScore,
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}

.gameOver {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  margin-top: 35px;
}

.restartButton {
  width: 100px;
  height: 50px;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
}

.stats {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
}
</style>
