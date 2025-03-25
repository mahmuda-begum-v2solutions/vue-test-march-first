<script setup lang="ts">
import AddPhonebook from '@/components/phonebook/AddPhonebook.vue';
import TablePhonebook from '@/components/phonebook/TablePhonebook.vue';
import type { User } from '@/types/phonebookTypes';
import { ref } from 'vue';

const users = ref<User[]>([])

const addUser = (user: User) => {
    user.id = users.value.length + 1;
    users.value.push(user)
}

</script>
<template>
    <AddPhonebook :addUser="addUser" />
    <TablePhonebook :users />
</template>
<style lang="css" scoped></style>