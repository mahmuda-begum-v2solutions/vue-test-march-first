<script setup lang="ts">
import { ref } from 'vue';
import { USER_ID } from '@/constants/constants';
import { PostValidator, type PostFieldErrors } from '@/utils/postValidator'
import { vHighlight } from '@/directives/highlight';
import type { ItemObj } from '@/types/types';
import { usePostStore } from '@/stores/userPosts';
import { toast } from 'vue3-toastify';

const store = usePostStore()

const fieldErrors = ref<PostFieldErrors | null>(null)

const handleForm = (e: Event) => {
  const form = e.target as HTMLFormElement
  const formData = new FormData(form)
  const title = formData.get('title') as string
  const content = formData.get('content') as string

  const validation = new PostValidator(title, content)
  const errors = validation.validator()

  if (Object.keys(errors).length > 0) {
    fieldErrors.value = errors
    return
  }

  fieldErrors.value = {}

  const temp: Partial<ItemObj> = {}
  temp.title = title
  temp.body = content
  temp.id = store.itemsArr.length + 1
  temp.userId = +USER_ID

  const data: ItemObj = temp as ItemObj

  store.addPost(data)
  toast.success('Form submitted');
  form.reset()
}
</script>
<template>
  <div class="add-post-container">
    <h2>Add Post</h2>
    <form @submit.prevent="handleForm" class="formadd">
      <label for="title">Title</label>
      <input id="title" @input="fieldErrors = null" type="text" name="title" placeholder="Enter title" />
      <template v-if="fieldErrors?.title">
        <span v-highlight>{{ fieldErrors.title }}</span>
      </template>

      <label for="content">Content</label>
      <textarea id="content" @input="fieldErrors = null" placeholder="Enter content" name="content"></textarea>
      <template v-if="fieldErrors?.content">
        <span v-highlight="'#fff9c4'">{{ fieldErrors.content }}</span>
      </template>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.add-post-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fafafa;
}

h2 {
  text-align: center;
  margin-bottom: 16px;
}

.formadd {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input,
textarea {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #0056b3;
}

span {
  font-size: 0.875rem;
  color: red;
}
</style>