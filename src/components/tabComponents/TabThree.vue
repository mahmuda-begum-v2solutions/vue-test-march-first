<script setup lang="ts">
import type { TabData } from '@/types/types';
import { toRefs } from 'vue';

const props = defineProps<TabData>()
const { title, user} = toRefs(props)

</script>

<template>
  <div class="p-4 border rounded">
    <p><strong>{{ title }}</strong></p>
    <p>👋 Hello, {{ user.name }}</p>
  </div>
</template>
