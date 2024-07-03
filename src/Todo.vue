<template>
  <div id="app" class="app-container">
    <input v-model="newTodo" @keyup.enter="addTodo" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span>{{ todo.text }}</span>
        <button @click="removeTodo(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const newTodo = ref("");
const todos = ref([{ text: "Add some todos" }]);

const addTodo = () => {
  const text = newTodo.value.trim();
  if (text) {
    todos.value.push({ text });
    newTodo.value = "";
  }
};

const removeTodo = (index: number) => {
  todos.value.splice(index, 1);
};
</script>

<style scoped></style>
