<script setup lang="ts">
import type { ItemObj } from '@/types/types';
import { reactive, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '@/stores/userPosts';

const route = useRoute()
const store = usePostStore()

//const receivedId = ref<number | null>(null)
const itemInfo = ref<ItemObj | null>(null)

watchEffect(() => {
  if (typeof route.params.id === 'string') {
    const data = store.getById(+route.params.id)
    itemInfo.value = data ?? null
  }
})
</script>
<template>
  <div class="container">
    <RouterLink class="back-link" to="/">← Go back</RouterLink>
    <div class="post-detail">
      <h1>{{ itemInfo?.title }}</h1>
      <p>{{ itemInfo?.body }}</p>
    </div>
  </div>
</template>


<style scoped>
.container {
  min-height: 100vh;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9fafb;
  font-family: 'Segoe UI', sans-serif;
}

.back-link {
  align-self: flex-start;
  margin-bottom: 24px;
  text-decoration: none;
  font-size: 14px;
  color: #007bff;
  border: 1px solid #007bff;
  padding: 6px 12px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.back-link:hover {
  background-color: #007bff;
  color: white;
}

.post-detail {
  background: white;
  padding: 24px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
}

.post-detail h1 {
  font-size: 24px;
  color: #333;
}

.post-detail p {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
}
</style>

