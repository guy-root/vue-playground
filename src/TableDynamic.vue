<template>
  <v-container>
    <v-data-table :headers="headers" :items="items"></v-data-table>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";

// JSON schema
const schema = {
  columns: [
    { label: "Name", field: "name" },
    { label: "Age", field: "age" },
    { label: "Email", field: "email" },
  ],
  data: [
    { name: "John Doe", age: 30, email: "john@example.com" },
    { name: "Jane Doe", age: 25, email: "jane@example.com" },
  ],
};

// Headers for the table based on the schema
const headers = computed(() => {
  return schema.columns.map((column) => ({
    text: column.label,
    value: column.field,
  }));
});

// Data items for the table based on the schema
const items = ref(schema.data);
</script>
