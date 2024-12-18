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
  <div id="app">
    <!-- Main Container -->
    <div class="container mt-4">
      <!-- Top Buttons -->
      <div class="row text-center mb-2">
        <div class="col-6">
          <button class="btn w-100">Still Learning</button>
        </div>
        <div class="col-6">
          <button >Know</button>
        </div>
      </div>

      <!-- Flashcard -->
      <div class="flashcard">
        <h2 class="display-6">{{ "word" }}</h2>
      </div>

      <!-- Extra Button -->
      <div class="text-center">
        <button class="btn btn-primary w-100 mt-3">Extra Action</button>
      </div>

      <!-- Fixed Button -->
      <button class="btn btn-info btn-fixed">Fixed Button</button>
    </div>
  </div>

  <!-- Vue JS -->
  <script lang="ts">
   export default {
   name: "Cardpage",
   };
  
    src="https://cdn.jsdelivr.net/npm/vue@3.2.45/dist/vue.global.prod.js">
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js">
  </script>
 </body>
</template>
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