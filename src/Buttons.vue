<template>
  <div>
    <v-btn @click="increment"> {{ count }} </v-btn>

    <v-card>
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
      ></v-img>

      <v-card-title>Beautiful Sunset</v-card-title>

      <v-card-subtitle class="pb-0">Nature</v-card-subtitle>

      <v-card-text class="text--primary">
        This is a description of the beautiful sunset. The colors are amazing
        and the atmosphere is very relaxing.
      </v-card-text>

      <v-card-actions>
        <v-btn text @click="action">Share</v-btn>
        <v-btn text>Explore</v-btn>
      </v-card-actions>
    </v-card>
    <v-chip> Chip </v-chip>
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
</script>
