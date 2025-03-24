<script setup lang="ts">
import type { TabData } from '@/types/types';
import { computed, reactive, ref, defineAsyncComponent } from 'vue';

const tabs = ['one', 'two', 'three'] as const
type Tabs = typeof tabs[number]

const activeTab = ref<Tabs>('one') //can also use TabKey

const components = {
  one: defineAsyncComponent(() => import('@/components/tabComponents/TabOne.vue')),
  two: defineAsyncComponent(() => import('@/components/tabComponents/TabTwo.vue')),
  three: defineAsyncComponent(() => import('@/components/tabComponents/TabThree.vue'))
} as const

//type TabKey = keyof typeof components

const activeComponent = computed(() => components[activeTab.value])

const data = reactive<TabData>({
  title: 'Hello from Parent',
  count: 5,
  user: {
    name: 'Alice',
    age: 30
  }
})
</script>

<template>
  <div class="container">
    <p>Parent Count: {{ data.count }}</p>

    <div class="tabs">
      <button v-for="tab in tabs" :key="tab" class="tab-button"
      :class="{ 'active': tab === activeTab }" @click="activeTab = tab">
        {{ tab }}
      </button>
    </div>

    <Transition name="fade" mode="out-in">
      <component :is="activeComponent" v-bind="data" @increment="data.count++"
      @changeTitle="data.title = $event"/>
    </Transition>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.tabs {
  display: flex;
  gap: 12px;
}

.tab-button {
  padding: 10px 16px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.tab-button:hover {
  background-color: #f2f2f2;
}

.tab-button.active {
  font-weight: bold;
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
