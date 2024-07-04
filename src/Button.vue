<template>
  <div>
    <v-btn @click="emit('run', $event)">{{ label }}</v-btn>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["run"]);

defineProps({
  label: String,
});
</script>
