import { createRouter, createWebHistory } from 'vue-router'
import { viewTransition } from '@/lib/utils'
import routes from '@/router/routes'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

router.beforeEach((_to, _from, next) => {
  viewTransition(next)
})

export default router
