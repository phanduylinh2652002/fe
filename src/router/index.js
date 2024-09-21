import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      beforeEnter: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/';
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/DetailView.vue')
    },
    {
      path: '/category/:id',
      name: 'category',
      component: () => import('../views/ListByCategory.vue')
    },
    {
      path: '/formCustomer/:id',
      name: 'formCustomer',
      component: () => import('../views/FormCustomer.vue')
    }
    ,
    {
      path: '/bookTour/:id',
      name: 'bookTour',
      component: () => import('../views/BookTour.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/News.vue')
    },
    {
      path: '/news/:id',
      name: 'news.show',
      component: () => import('../views/news/Detail.vue'),
  },
  ]
})

export default router
