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
     <div class="row align-items-center">
      <div class="col-md-2"> 
       <button type="button" class="btn btn-success" @click="nextSlide",>Success</button>
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
           <h2>{{ cards[0].words[0].term }}</h2>
           <!--  <h2>{{ slide.title }}</h2> -->
           <p>{{ slide.content }}</p>
          </div>
        </div>

        <!-- Navigációs gombok -->
        <!-- <button class="carousel-btn prev" @click="prevSlide">‹</button> -->
         <!--<button class="carousel-btn next" @click="nextSlide">›</button> -->

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
         <button type="button" class="btn btn-danger" @click="nextSlide",>Danger</button>
      </div>

      <!-- Fixed Button -->
      <button class="btn btn-info btn-fixed">Fixed Button</button>
  </div>
 </body>
</template>
<!-- Vue JS -->
<script lang="ts">
import { CarouselPlugin } from 'bootstrap-vue';

export default {
 name: "Cardpage",
 data() {
    return {
      slides: [
        {
          title: "Első Dia",
          content: "Ez az első diánk tartalma, amely fontos információkat tartalmaz.",
        },
        {
          title: "Második Dia",
          content: "Ez a második dián található szöveges információ.",
        },
      ],
      cards: this.$cards,
      currentIndex: 0,

    };
  },
  methods: 
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      failure = words.pop[0]
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
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
</style>