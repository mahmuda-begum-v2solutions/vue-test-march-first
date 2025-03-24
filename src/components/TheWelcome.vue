<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <a href="javascript:void(0)" @click="openReadmeInEditor"><code>README.md</code></a
        >
    </template>
  </WelcomeItem>
</template>
