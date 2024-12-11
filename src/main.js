import { createApp } from 'vue'
import App from './menu.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Menu from './menu.vue'
import PracticeWindow from './practice_window.vue'

const routes = [
    {
        path: '/',
        name: 'Menu',
        component: Menu, // Main page with the cards
      },
    {
      path: '/card/:id',
      name: 'PracticeWindow',
      component: PracticeWindow,
    },
    // Other routes...
  ];

  const router = createRouter({
    history: createWebHistory('/'),
    routes,
  });

  export default router;

createApp(App)
.use(router)
.mount('#app')

// main.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
