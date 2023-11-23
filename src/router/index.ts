import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

router.beforeEach((_to, _from, next) => {
  next()
})

router.afterEach((to, from) => {
  console.log(to, from)
})

export default router
