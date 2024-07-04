<!-- src/components/Counter.vue -->
<template>
  <div>
    <p>{{ count }}</p>
    <button @click="inc">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "./Store.pinia";
import { storeToRefs } from "pinia";

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
const { increment } = counterStore;

function inc() {
  increment(40);
}
</script>
