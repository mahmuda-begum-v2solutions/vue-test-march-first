<script setup lang="ts">
import type { User } from '@/types/phonebookTypes';
import { computed, ref } from 'vue';

const props = defineProps<{
    users: User[]
}>()

type SortKey = keyof Omit<User, 'id'>

const sortKey = ref<SortKey>('fName')
const sortAsc = ref(true)

const toggleSort = (value: SortKey) => {
    if (sortKey.value === value) {
        sortAsc.value = !sortAsc.value
    } else {
        sortKey.value = value
        sortAsc.value = true
    }
}

const sortedUsers = computed(() => {
    return [...props.users].sort((a, b) => {
        const key = sortKey.value
        if (key === 'phone') {
            const numA = Number(a[key])
            const numB = Number(b[key])
            return sortAsc.value ? numA - numB : numB - numA
        } else {
            const valA = a[key]?.toLowerCase?.() ?? '';
            const valB = b[key]?.toLowerCase?.() ?? '';
            return sortAsc.value ? valA.localeCompare(valB) : valB.localeCompare(valA)
        }
    })
})
</script>
<template>

    <div class="table-container">
        <h2>Contact Information</h2>
        <table>
            <thead>
                <tr>
                    <th @click="toggleSort('fName')">First Name ⬍</th>
                    <th @click="toggleSort('lName')">Last Name ⬍</th>
                    <th @click="toggleSort('phone')">Phone ⬍</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="(user, index) in sortedUsers" :key="user.id ?? index">
                    <td>{{ user.fName }}</td>
                    <td>{{ user.lName }}</td>
                    <td>{{ user.phone }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style lang="css" scoped>
.table-container {
    max-width: 600px;
}

.table-container h2 {
    margin-bottom: 15px;
    color: #0077b6;
}

table {
    width: 100%;
    border-collapse: collapse;
    background-color: white;
}

th,
td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
}

th {
    background-color: #e6f4f1;
}
</style>