<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { usePostStore } from './stores/userPosts';

const store = usePostStore()

onMounted(() => {
  store.init()
})
</script>

<template>
  <div class="app-container">
    <h1 class="title">Vue + TypeScript (Class) Demos</h1>

    <nav class="nav">
      <RouterLink to="/" class="nav-link">Fetch All APIs + Search</RouterLink>
      <RouterLink to="/tictactoe" class="nav-link">Tic Tac Toe (Class-based)</RouterLink>
      <RouterLink to="/dynamictabs" class="nav-link">Dynamic Tabs with Dynamic Component Use</RouterLink>
      <RouterLink to="/phonebook" class="nav-link">Phonebook sorting</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  font-family: Arial, sans-serif;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.nav-link {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: background-color 0.2s ease;
}

.nav-link:hover {
  background-color: #e6e6e6;
}
</style>
