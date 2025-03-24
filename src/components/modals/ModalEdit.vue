<script setup lang="ts">
import type { ItemObj } from '@/types/types';
import { PostValidator, type PostFieldErrors } from '@/utils/postValidator';
import { onMounted, ref, watch } from 'vue';

const itemInitial = ref<ItemObj | null>(null)
const fieldErrors = ref<PostFieldErrors | null>(null)

const props = defineProps<{
    isVisible: boolean;
    initialItem?: ItemObj | null;
}>()

const emit = defineEmits<{
    (e: 'close'): void;
    (e: 'update:inputVal', val: ItemObj): void;
}>()

const handleSubmit = () => {
    const validation = new PostValidator(itemInitial.value?.title ?? '', itemInitial.value?.body ?? '')
    const errors: PostFieldErrors = validation.validator()

    if (Object.keys(errors).length) {
        fieldErrors.value = errors
        return
    }
    if (!itemInitial.value) {
        return
    }

    fieldErrors.value = {}
    emit('update:inputVal', itemInitial.value)
}

watch(() => props.initialItem, (newval) => {
    itemInitial.value = newval ? { ...newval } : null
})

</script>
<template>
    <Teleport to="body">
        <div v-if="isVisible  && itemInitial" class="overlay">
            <div class="content">
                <p>Update</p>
                <input type="text" @input.prevent="fieldErrors = null" v-model="itemInitial.title" />
                <textarea v-model="itemInitial.body" @input.prevent="fieldErrors = null"/>
                <div class="buttons">
                    <button @click="handleSubmit">Update</button>
                    <button @click="$emit('close')">Cancel</button>
                </div>
            </div>
        </div>
    </Teleport>
</template>
<style lang="css" scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}

.content {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    width: 90%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
}

.buttons {
    display: flex;
    justify-content: space-between;
}
</style>