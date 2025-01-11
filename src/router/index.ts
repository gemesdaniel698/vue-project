import { createRouter, createWebHistory } from 'vue-router';
import Menu from '../views/menu.vue'
import Cardpage from '../views/card_test.vue'
import card_test from '../views/card_test.vue';
import CardCreate from '../views/card_create.vue';
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
    {
      path: '/views/card_create',
      name: 'CardCreate',
      component: CardCreate,
    },
    // Other routes...
  ];

  const router = createRouter({
    history: createWebHistory('/'),
    routes,
  });

  export default router;