<template>
  <div class="container py-3"  v-if="$route.name !== 'PracticeWindow'">
    <!-- Title Section -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <button class="btn btn-primary btn-sm">Smart Recall</button>
      <button class="btn btn-danger btn-sm">x</button>
    </div>
    
    <!-- Search Bar -->
    <div class="mb-3">
      <input 
        type="text" 
        class="form-control" 
        v-model="searchQuery" 
        placeholder="Search"
      />
    </div>

    <!-- Card Container -->
    <div class="row g-3">
      <router-link 
        v-for="card in filteredCards" 
        :key="card.id" 
        :to="{ name: 'PracticeWindow', params: { id: card.id } }"
        class="col-6"
      >
        <div class="card text-center shadow-sm">
          <div class="card-body">
            <p class="card-text">{{ card.title }}</p>
          </div>
        </div>
      </router-link>
    </div>

    <!-- Navigation Bar -->
    <div class="d-flex justify-content-between align-items-center mt-4">
      <button class="btn btn-outline-secondary btn-sm">Library</button>
      <button class="btn btn-success btn-sm">+</button>
      <button class="btn btn-outline-secondary btn-sm">Profile</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Menu",
  data() {
    return {
      searchQuery: '',
      cards: [
        { id: 1, title: 'German words - Lektion 4' },
        { id: 2, title: 'German words - Lektion 3' },
        { id: 3, title: 'German words - Lektion 2' },
        { id: 4, title: 'German words - Lektion 1' },
        { id: 5, title: 'German words - Lektion 4' },
        { id: 6, title: 'German words - Lektion 3' },
        { id: 7, title: 'German words - Lektion 2' },
        { id: 8, title: 'German words - Lektion 1' },
        { id: 9, title: 'English - Unit 7' },
        { id: 10, title: 'Chemistry definitions' },
      ],
    };
  },
  computed: {
    filteredCards() {
      return this.cards.filter((card) =>
        card.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
}
.card {
  border-radius: 10px;
}
</style>
