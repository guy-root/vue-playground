// src/stores/counter.ts
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  function increment(delta: number = 0) {
    console.log("incrementing", count.value);
    count.value += delta;
  }

  return { count, increment };
});
