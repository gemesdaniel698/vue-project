import { createRouter, createWebHistory } from 'vue-router';
import Menu from '../views/menu.vue'
import Cardpage from '../views/card_test.vue'

const routes = [
    {
        path: '/',
        name: 'Menu',
        component: Menu, // Main page with the cards
      },
    {
      path: '/card/:id',
      name: 'Cardpage',
      component: Cardpage,
    },
    // Other routes...
  ];

  const router = createRouter({
    history: createWebHistory('/'),
    routes,
  });

  export default router;