<template>
  <div>
    <Buttons />
    <Todo />
    <Bigtable />
    <v-divider></v-divider>
    <Dialog />
    <Autocomplete />
  </div>
</template>

<script setup lang="ts">
import Buttons from "./Buttons.vue";
import Todo from "./Todo.vue";
import Bigtable from "./Table.vue";
import Dialog from "./Dialog.vue";
import Autocomplete from "./Autocomplete.vue";
</script>
