import { createRouter, createWebHistory } from '@ionic/vue-router';

import MemoriesPage from '../pages/MemoriesPage.vue';
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/memories',
    component: MemoriesPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
