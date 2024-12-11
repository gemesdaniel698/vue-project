
<template>
  <div id="app">
    <div class="title">
      <button>Smart Recall</button>
      <button>x</button>
    </div>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search" />
    </div>
    <div class="card-container">
      <div
        v-for="card in filteredCards"
        :key="card.id"
        class="card"
      >
        {{ card.title }}
      </div>
    </div>
    <div class="nav-bar">
      <button>Library</button>
      <button>+</button>
      <button>Profile</button>
    </div>
  </div>
</template>



<script>
export default {
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
#app {
  font-family: Arial, sans-serif;
  margin: 20px;
}

.search-bar {
  margin-bottom: 20px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.card {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  background-color: #f9f9f9;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.title {
  margin-bottom: 20px;
  border-style: double;
  gap: 100px;
}
</style>
