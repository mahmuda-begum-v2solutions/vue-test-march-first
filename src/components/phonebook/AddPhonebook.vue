<script setup lang="ts">
import type { User } from '@/types/phonebookTypes';
import { UserInfo } from '@/utils/phonebook';
import { ref } from 'vue';

const props = defineProps<{
    addUser: (user: User) => void
}>()

const initialUser: User = new UserInfo(null, 'milky', 'black', 123456)

const user = ref<User>(new UserInfo(initialUser.id, initialUser.fName, initialUser.lName, initialUser.phone))

const handleSubmit = () => {
    if (!user.value.fName || !user.value.lName || !user.value.phone) {
        return
    }
    props.addUser({ ...user.value })
    user.value = UserInfo.from({})
}
</script>
<template>
    <div class="form-container">
        <h2>Add User</h2>
        <form @submit.prevent="handleSubmit">
            <label for="first-name">First Name:</label><br>
            <input type="text" id="first-name" name="first-name" v-model="user.fName"><br>

            <label for="last-name">Last Name:</label><br>
            <input type="text" id="last-name" name="last-name" v-model="user.lName"><br>

            <label for="phone">Phone:</label><br>
            <input type="number" id="phone" name="phone" v-model="user.phone"><br>

            <button type="submit">Add User</button>
        </form>
    </div>
</template>
<style lang="css" scoped>
.form-container {
    border: 1px solid #d0eaf7;
    border-radius: 10px;
    padding: 20px;
    max-width: 400px;
    background-color: #ffffff;
    margin-bottom: 40px;
}

.form-container h2 {
    margin-bottom: 15px;
    color: #0077b6;
}

.form-container label {
    display: block;
    margin-top: 10px;
    font-weight: bold;
}

.form-container input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-container button {
    padding: 10px 15px;
    background-color: #20b2aa;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.form-container button:hover {
    background-color: #178b87;
}
</style>