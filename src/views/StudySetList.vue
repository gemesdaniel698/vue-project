<template>
    <div class="container py-4">
      <h1 class="text-center">Study Sets</h1>
      <ul class="list-group">
        <li
          v-for="(set, name) in Object.entries(studySets)"
          :key="name"
          class="list-group-item"
        >
          <router-link :to="`/studyset/${name}`">{{ name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "StudySetList",
    setup() {
      const studySets = {
        "German words - Lektion 1": {},
        "German words - Lektion 2": {},
        // ... további setek
      };
  
      return { studySets };
    },
  });
  </script>
  