<template>
  <div class="app">
    <!---  <b-button>I am a Button</b-button>-->

    
    <button id="myButton" class="btn btn-primary" onclick="alert('Button clicked!')">
    Click Me!
    </button>


    <div class="score-container">
      <div class="score">
        <div class="still-learning">3</div>
        <span>-</span>
        <div class="know">17</div>
      </div>
    </div>
    <div>
      <div class="labels">
        <span>Still learning</span>
        <span>Know</span>
      </div>
    </div>
    <div class="circle">
      <span>{{ percentage }}%</span>
    </div>
    <button @click="keepPracticing">Keep practicing</button>
  </div>
</template>



<script>
export default {
  data() {
    return {
      stillLearning: 3,
      know: 17,
      percentage: 86,
    };
  },
  methods: {
    keepPracticing() {
      console.log("Keep practicing clicked");
    },
  },
};
</script>






<style scoped>
 .app {
   text-align: center;
   font-family: Arial, sans-serif;
 }

 .score-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
 }

 .score {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 24px;
  font-weight: bold;
 }

 .labels {
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 150px;
  gap: 200px;
  font-size: 14px;
 }

 .circle {
  width: 100px;
  height: 100px;
  border: 2px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  margin: 200px auto;
 }

 button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
 }
</style>

