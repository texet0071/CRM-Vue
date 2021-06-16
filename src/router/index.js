import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'



Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      meta: {
        layout: 'main',
        auth: true
      },
      component: () => import('../views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        layout: 'empty',
      },
      component: () => import('../views/Login.vue')
    },
    {
      path: '/Categories',
      name: 'Categories',
      meta: {
        layout: 'main',
        auth: true
      },
      component: () => import('../views/Categories.vue')
    },
    {
      path: '/history',
      name: 'History',
      meta: {
        layout: 'main',
        auth: true
      },
      component: () => import('../views/history.vue')
    },
    {
      path: '/planning',
      name: 'Planning',
      meta: {
        layout: 'main',
        auth: true
      },
      component: () => import('../views/planning.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {
        layout: 'main',
        auth: true
      },
      component: () => import('../views/profile.vue')
    },
    {
      path: '/record',
      name: 'record',
      meta: {
        layout: 'main',
        auth: true
      },
      component: () => import('../views/record.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        layout: 'empty',
      },
      component: () => import('../views/register.vue')
    },
    {
      path: '/detail-record/:id',
      name: 'detail',
      meta: {
        layout: 'main',
        auth: true
      },
      component: () => import('../views/detail-record.vue')
    }
  ]

})



router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (requireAuth && !currentUser) {
    next('/login?message=login')
  } else {
    next()
  }
})

export default router