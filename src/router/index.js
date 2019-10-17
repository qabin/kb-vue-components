import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router;

