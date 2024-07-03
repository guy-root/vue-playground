<template>
  <div>
    <v-data-table :items="items"></v-data-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Define reactive state
const count = ref(0);

// Define methods
const increment = () => {
  count.value++;
};

const items = [
  {
    name: "African Elephant",
    species: "Loxodonta africana",
    diet: "Herbivore",
    habitat: "Savanna, Forests",
  },
  // ... more items
];
</script>
