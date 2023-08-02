import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import store from '../store/index'
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
      name: 'categories',
      component: () => import('../views/CategoriesView.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('../views/BooksView.vue')
    },
    {
      path: '/category/:slug',
      name: 'category',
      component: () => import('../views/CategoryView.vue')
    },
    {
      path: '/book/:slug',
      name: 'book',
      component: () => import('../views/BookView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue'),
      meta: { auth: true }
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('../views/PaymentView.vue'),
      meta: { auth: true }
    },
    {
      path: '/my-order',
      name: 'my-order',
      component: () => import('../views/MyOrder.vue'),
      meta: { auth: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      meta: { auth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (store.getters['auth/guest']) {
      store.dispatch('alert/set', {
        status: true,
        text: 'Login first',
        color: 'error'
      })
      store.dispatch('setPrevUrl', to.path)
      store.dispatch('dialog/setComponent', 'login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
