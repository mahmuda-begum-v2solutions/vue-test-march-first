<script setup lang="ts">
import type { TabData } from '@/types/types';
import { toRefs } from 'vue';

const props = defineProps<TabData>()
const { user } = toRefs(props)
</script>

<template>
  <div class="p-4 border rounded">
    <h2>User Info</h2>
    <p>Name: {{ user.name }}</p>
    <p>Age: {{ user.age }}</p>
  </div>
</template>
