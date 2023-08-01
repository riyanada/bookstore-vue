import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
// import { component } from 'vue/types/umd'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '*',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/categories',
      name: '/categories',
      component: () => import('../views/CategoriesView.vue')
    },
    {
      path: '/books',
      name: '/books',
      component: () => import('../views/BooksView.vue')
    },
    {
      path: '/category/:slug',
      name: '/category',
      component: () => import('../views/CategoryView.vue')
    },
    {
      path: '/book/:slug',
      name: '/book',
      component: () => import('../views/BookView.vue')
    }
  ]
})

export default router
