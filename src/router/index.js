import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/line-form',
      name: 'line-form',
      component: () => import('../views/LineFormView.vue'),
    },
    {
      path: '/lines-preview',
      name: 'lines-preview',
      component: () => import('../views/LinesPreviewView.vue'),
    },
  ],
})

export default router
