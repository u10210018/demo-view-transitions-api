import { createRouter, createWebHistory } from 'vue-router'
import { viewTransition } from '@/lib/utils'
import routes from '@/router/routes'

const router = createRouter({
  history: createWebHistory('/demo-view-transitions-api/'),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((_to, _from, next) => {
  viewTransition(next)
})

export default router
