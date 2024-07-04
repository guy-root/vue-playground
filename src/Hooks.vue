<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  computed,
  watch,
  watchEffect,
  onMounted,
  onUpdated,
  onUnmounted,
  provide,
  inject,
} from "vue";

const count = ref(0);
const state = reactive({
  message: "Hello",
});
const double = computed(() => count.value * 2);

watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`);
});

watchEffect(() => {
  console.log(`Count is: ${count.value}`);
});

export default {
  setup() {
    onMounted(() => {
      console.log("Component mounted");
    });

    onUpdated(() => {
      console.log("Component updated");
    });

    onUnmounted(() => {
      console.log("Component unmounted");
    });
  },
};
</script>

<style>
/* Add your styles here */
</style>
