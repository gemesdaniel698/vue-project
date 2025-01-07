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
    <div class="container-xxl">
     <div class="row align-items-center ">
      <!-- Correct button -->
      <div class="col-lg-2"> 
       <button type="button" class="btn btn-success">Success</button>
      </div>  
      <!-- Card -->
      <div class="col-lg-6"> 
         <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
           <div class="carousel-item active align-items-center" data-bs-interval="false">
            <img src="/src/pictures/haus.jpg" class="" alt="...">
           </div>
           <div class="carousel-item align-items-center" data-bs-interval="false">
            <img src="/src/pictures/haz.jpg" class="" alt="...">
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
      <!-- Incorrect button -->
      <div class="col-lg-2"> 
         <button type="button" class="btn btn-danger">Danger</button>
      </div>
     </div>
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
.container-xxl {
  border-style: dotted;
}
.col-lg-6 {
  border-style: groove;
  border-radius: 12px;
}
.col-lg-2 {
  border-style: double;
}
div {
  background-color: lightblue;
}
button {
  background-color: lightblue;
}
body {
  border-style: dotted;
}
.container-fluid {
  background-color: #383dd6
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