<script setup lang="ts">
import type { TabData } from '@/types/types'
import { toRefs } from 'vue'

const props = defineProps<TabData>()
const emit = defineEmits<{
  (e: 'increment'): void
  (e: 'changeTitle', value: string): void
}>()

const { title, count } = toRefs(props)
</script>

<template>
  <div class="p-4 border rounded">
    <h2>{{ title }}</h2>
    <p>Count: {{ count }}</p>
    <button @click="emit('increment')">Increment Count</button>
    <button @click="emit('changeTitle', title + '!')">Update Title</button>
  </div>
</template>
