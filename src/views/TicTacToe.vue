<script setup lang="ts">
import { TicTacToe } from '@/utils/tictactoe';
import { ref } from 'vue';

const game = ref<TicTacToe>(new TicTacToe)

const handleMove = (rowIndex: number, columnIndex: number) => {
    game.value.makeMove(rowIndex, columnIndex)
}

const resetGame = () => {
    game.value = new TicTacToe()
}

</script>
<template>
    <div class="game">
        <h2 class="status" v-if="game.winner">
            🎉 Winner: {{ game.winner }}
        </h2>
        <div class="board">
            <div v-for="(row, rowIndex) in game.board" :key="rowIndex" class="row">

                <button v-for="(cell, columnIndex) in row" :key="columnIndex" class="cell"
                    @click="handleMove(rowIndex, columnIndex)" :disabled="!!cell || !!game.winner">{{ cell }}</button>

            </div>
        </div>
        <button @click="resetGame" class="reset">Reset</button>
    </div>
</template>
<style scoped>
.game {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.status {
    font-size: 1.5rem;
    font-weight: bold;
}

.board {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 0.5rem;
}

.row {
    display: flex;
    gap: 0.5rem;
}

.cell {
    width: 60px;
    height: 60px;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    background: #fff;
    border: 2px solid #333;
    border-radius: 8px;
    transition: background 0.2s;
}

.cell:disabled {
    cursor: default;
    background: #f0f0f0;
}

.reset {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
}
</style>