import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('../views/Posts.vue')
  },
  {
    path: '/posts/:id',
    name: 'singlepost',
    component: () => import('../views/SinglePost.vue'),
    meta: {
      auth: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const authUser = true;

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !authUser){
    next('/');
  } else {
    next();
  }
})

export default router
