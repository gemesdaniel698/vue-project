<template>
    <div class="container-xxl px-4 text-center">
      <div class="flashcard">
        <h2 v-if="currentCard.term">{{ currentCard.term }}</h2>
        <p v-if="currentCard.definition">{{ currentCard.definition }}</p>
      </div>
      <div class="row mt-4">
        <div class="col-md-6">
          <button class="btn btn-success w-100" @click="nextCard">
            Következő
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from "vue";
  import { useRoute } from "vue-router";
  
  export default defineComponent({
    name: "FlashcardPage",
    setup() {
      const route = useRoute();
  
      const studySets = {
        "German words - Lektion 1": {
          terms: ["kutya", "macska", "egér", "ló", "tehén", "tyúk", "disznó"],
          definitions: ["Hund", "Katze", "Maus", "Pferd", "Kuh", "Huhn", "Schwein"],
        },
        // ... további study setek
      };
  
      const currentSet = computed(() => {
        const id = route.params.id as string;
        return studySets[id];
      });
  
      const displayed = ref<Set<number>>(new Set());
      const currentCard = ref<{ term: string; definition: string }>({ term: "", definition: "" });
  
      const getRandomIndex = () => {
        const availableIndexes = Array.from(currentSet.value.terms.keys()).filter(
          (index) => !displayed.value.has(index)
        );
        if (!availableIndexes.length) {
          displayed.value.clear();
          return 0;
        }
        return availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
      };
  
      const nextCard = () => {
        const randomIndex = getRandomIndex();
        displayed.value.add(randomIndex);
        currentCard.value = {
          term: currentSet.value.terms[randomIndex],
          definition: currentSet.value.definitions[randomIndex],
        };
      };
  
      nextCard();
  
      return { currentCard, nextCard };
    },
  });
  </script>
  
  <style scoped>
  .flashcard {
    border: 2px solid #dee2e6;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    padding: 20px;
    margin: 30px auto;
  }
  </style>
  