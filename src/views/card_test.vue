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
       <button type="button" class="btn btn-success">Success</button>
      </div>  
      <div class="col-md-6"> 
         <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
           <div class="carousel-item active" data-bs-interval="1000000">
            <img src="/src/pictures/haus.jpg" class="d-block w-75" alt="...">
           </div>
           <div class="carousel-item" data-bs-interval="1000000">
            <img src="/src/pictures/haz.jpg" class="d-block w-75" alt="...">
           </div>
          </div>
           <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
           </button>
           <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
           </button>
         </div>
      </div>
      <div class="col-md-2"> 
         <button type="button" class="btn btn-danger">Danger</button>
      </div>
     </div>
      <!-- Fixed Button -->
      <button class="btn btn-info btn-fixed">Fixed Button</button>
    </div>
  </div>
 </body>
</template>
<!-- Vue JS -->
<script lang="ts">
import { CarouselPlugin } from 'bootstrap-vue';

 export default {
 name: "Cardpage",
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
</style>