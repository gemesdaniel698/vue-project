<template>
 <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flashcard with Vue</title>
  <!-- Bootstrap CSS -->
  <link 
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
    rel="stylesheet"
  />
 </head>
 <body>
  <div id="app ">
    <!-- Main Container -->
    <div class="container-xxl px-4 ">
      <div>
          <button @click="shuffleArray">Shuffle Array</button>
      </div>

      <div class="row align-items-center">
      <div class="col-md-2"> 
       <button type="button" class="btn btn-success" @click = deleteFirstElement>Success</button>
      </div>  
      <div class="carousel">
       <!-- Slider Container -->
        <div class="carousel-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <!-- Slide-ek -->
         <div
           v-for="(slide, index) in slides"
           :key="index"
           class="carousel-slide"
          > 

           <!-- card with term and def -->
           <div class="card-container" @click="flipCard">
            <div class="cardself" :class="{ flipped: isFlipped }">
             <div class="cardside front">{{ slide.term }}</div>
             <div class="cardside back">{{ slide.definition }}</div>
            </div>
           </div>
          </div>
        </div>

        <!-- Navigációs gombok -->


        <!-- Navigációs pontok -->
        <div class="carousel-dots">
          <span
            v-for="(slide, index) in slides"
            :key="index"
            :class="{ active: currentIndex === index }"
            @click="goToSlide(index)"
          ></span>
        </div>
      </div>
     </div>
    </div>
      <div class="col-md-2"> 
         <button type="button" class="btn btn-danger" @click="moveFirstElement">Danger</button>
      </div>

      <!-- Fixed Button -->
      <button class="btn btn-info btn-fixed">Fixed Button</button>
  </div>
 </body>
</template>
<!-- Vue JS -->
<script lang="ts">
import { CarouselPlugin } from 'bootstrap-vue';
import {cards} from '../main';

export default {
 name: "Cardpage",
 
 data() {
    return {
      slides: 
      // {term: "Első Dia"},
      // {term: "Második Dia"},
        cards[0].words
      ,
      words: this.$words,
      currentIndex: 0,
      originalArray: Array.from(cards[0].words),
     // originalArray: [cards[0].words], // Example initial array
      newArray: [], // Array to hold pasted elements
      searchQuery: '',
      isFlipped: false, // Tracks whether the card is flipped
      sideA: 1,         // Content for side A
      sideB: 1,         // Content for side B
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    // Method to shuffle the array
    shuffleArray() {
      for (let i = this.originalArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.originalArray[i], this.originalArray[j]] = [this.originalArray[j], this.originalArray[i]];
      }
    },
    // Method to delete the first element of originalArray
    deleteFirstElement() {
      if (this.originalArray.length > 0) {
        this.originalArray.shift();
      } else {
        alert("Original array is empty! Nothing to delete.");
      }
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.isFlipped = !this.isFlipped;
    },
    // Method to move the first element from originalArray to newArray
    moveFirstElement() {
      if (this.originalArray.length > 0) {
        const firstElement = this.originalArray.shift();
        this.newArray.push(firstElement);
      } else {
        alert("Original array is empty! Nothing to move.");
      }
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.isFlipped = !this.isFlipped;
    },
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
  },
 };
  
</script>
<style>
body {
  background-color: #f8f9fa; /* Light gray background */
}
.flashcard {
  border: 2px solid #dee2e6;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  text-align: center;
  padding: 20px;
  margin: 30px auto;
}
.btn-fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  margin: auto;
  background: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
}

.carousel-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}

.carousel-slide h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.carousel-slide p {
  font-size: 1rem;
  color: #666;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
}

.carousel-btn.prev {
  left: 10px;
}

.carousel-btn.next {
  right: 10px;
}

.carousel-dots {
  text-align: center;
  margin-top: 10px;
}

.carousel-dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #ddd;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.carousel-dots span.active {
  background-color: #333;
}
/* for the rotating card be carefull when modifing*/
.card-container {
  perspective: 1000px;
  display: inline-block;
}

.cardself {
  width: 150px;
  height: 150px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.cardself.flipped {
  transform: rotateY(180deg);
}

.cardside {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.front {
  background-color: #f9f9f9;
}

.back {
  background-color: #d9e8fc;
  transform: rotateY(180deg);
}
</style>