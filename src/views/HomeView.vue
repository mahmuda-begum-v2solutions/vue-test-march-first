<script setup lang="ts">
import ModalEdit from '@/components/modals/ModalEdit.vue'
import type { ItemObj } from '@/types/types';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { usePostStore } from '@/stores/userPosts';
import AddForm from '@/components/AddForm.vue';
import { Debounce } from '@/utils/debouncer';

const router = useRouter()
const store = usePostStore()
const debounce = new Debounce(250)

const initialItem = ref<ItemObj | null>(null)
const isVisible = ref<boolean>(false)


const close = () => {
  isVisible.value = false
  initialItem.value = null
}

const handleUpdate = (item: ItemObj) => {
  store.updatePost(item.id, item)
  close()
}
const handleView = (item: ItemObj) => {
  router.push(`/post/${item.id}`)
}
const handleDelete = (id: number) => {
  store.deletePost(id)
}

const openModal = (item: ItemObj) => {
  initialItem.value = item
  isVisible.value = true
}

watch(() => store.searchText, () => {
  debounce.run(() => store.getFilteredItems())
})

watch(() => store.itemsArr, () => {
  debounce.run(() => store.getFilteredItems())
}, { deep: true })

</script>

<template>
  <div class="about">
    <div class="title">
      <h1>Manage Your Posts</h1>
    </div>
    <AddForm />
    <template v-if="store.itemsArr.length">
      <input v-model="store.searchText" placeholder="Search items..." class="search-input" />
      <div v-if="store.filteredItemsArr.length">
        <table>
          <thead>
            <tr>
              <th>title</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in store.filteredItemsArr" :key="item.id">
              <td>{{ item.title }}</td>
              <td class="action-buttons">
                <button @click="openModal(item)" title="Edit">✏️</button>
                <button @click="handleView(item)" title="View">👁️</button>
                <button @click="handleDelete(item.id)" title="Delete">🗑️</button>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        search something else
      </div>
    </template>
  </div>
  <ModalEdit :isVisible="isVisible" :initialItem="initialItem" @close="close" @update:inputVal="handleUpdate" />
</template>

<style scoped>
.about {
  min-height: 100vh;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  font-family: Arial, sans-serif;
}

.title {
  border-bottom: 2px solid #28a745;
  padding-bottom: 8px;
  margin-bottom: 16px;
}

input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 250px;
  margin-bottom: 16px;
  font-size: 14px;
}

table {
  border-collapse: collapse;
  width: 100%;
  max-width: 600px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 10px 14px;
  text-align: left;
  font-size: 14px;
}

th {
  background-color: #f4f4f4;
}

button {
  margin-right: 6px;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #0056b3;
}

button:last-child {
  margin-right: 0;
}

.formadd {
  width: 100%;
  max-width: 500px;
}

.search-input {
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: border-color 0.2s;
}

.search-input:focus {
  border-color: #007bff;
}

.action-buttons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.action-buttons button {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 4px;
  transition: transform 0.2s ease;
}

.action-buttons button:hover {
  transform: scale(1.2);
}
</style>
