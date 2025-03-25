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
      path: '/post/:id',
      name: 'postdetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PostDetailView.vue'),
    },
    {
      path: '/tictactoe',
      name: 'tictactoe',
      component: () => import('../views/TicTacToe.vue'),
    },
    {
      path: '/dynamictabs',
      name: 'dynamictabs',
      component: () => import('../views/DynamicTabs.vue'),
    },
    {
      path: '/phonebook',
      name: 'phonebook',
      component: () => import('../views/PhoneBook.vue'),
    },
  ],
})

export default router
