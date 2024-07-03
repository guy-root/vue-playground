<template>
  <v-autocomplete label="Autocomplete" :items="items"></v-autocomplete>
</template>

<script setup lang="ts">
const items = [
  "California",
  "Colorado",
  "Florida",
  "Georgia",
  "Texas",
  "Wyoming",
];
</script>
