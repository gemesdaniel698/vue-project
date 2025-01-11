<template>
  <div class="editor">

    <input 
      v-model="title" 
      type="text" 
      placeholder="Title" 
      class="title-input" 
    />


    <div class="cards">
      <div 
        class="card" 
        v-for="(card, index) in cards" 
        :key="index"
      >
        <input 
          v-model="card.term" 
          type="text" 
          placeholder="Term" 
          class="card-input" 
        />
        <input 
          v-model="card.definition" 
          type="text" 
          placeholder="Definition" 
          class="card-input" 
        />
        <button 
          class="delete-btn" 
          @click="deleteCard(index)"
        >
          🗑️
        </button>
      </div>
    </div>
    <button class="add-btn" @click="addCard">
      Add New Card
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "CardCreate",
  data() {
    return {
      title: "",
      cards: [
        { term: "", definition: "" }, 
      ],
    };
  },
  methods: {
    addCard() {
      this.cards.push({ term: "", definition: "" });
    },
    deleteCard(index) {
      this.cards.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.editor {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
}

.title-input {
  width: 80%;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
}

.card {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.card-input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.delete-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.add-btn {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-btn:hover {
  background-color: #0056b3;
}
</style>
