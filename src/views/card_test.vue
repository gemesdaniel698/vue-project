<template>
    <div class="top-bar">
      <div class="score">
        <span>{{ stillLearning }}</span> - <span>{{ know }}</span>
      </div>
    </div>
    <div class="main-content">
      <button class="btn-left" @click="moveToStillLearning">Still learning</button>
      <div class="card">
        <span>{{ currentWord }}</span>
      </div>
      <button class="btn-right" @click="moveToKnow">Know</button>
    </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      stillLearning: 2,
      know: 1,
      currentWord: "Das Haus",
    };
  },
  methods: {
    moveToStillLearning() {
      this.stillLearning += 1;
      this.know -= 1;
      this.nextWord();
    },
    moveToKnow() {
      this.know += 1;
      this.stillLearning -= 1;
      this.nextWord();
    },
    nextWord() {
      this.currentWord = "Das Auto";
    },
  },
};
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
}

.top-bar {
  margin: 10px 0;
  font-size: 20px;
  font-weight: bold;
}

.main-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.card {
  width: 300px;
  height: 400px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
}

.btn-left,
.btn-right {
  background-color: transparent;
  border: 1px solid black;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

.btn-left {
  position: absolute;
  left: 10px;
}

.btn-right {
  position: absolute;
  right: 10px;
}
</style>
