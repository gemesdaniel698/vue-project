import { createRouter, createWebHistory } from 'vue-router';
import Menu from '../views/menu.vue'
import PracticeWindow from '../views/practice_window.vue'

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