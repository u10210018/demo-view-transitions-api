import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

router.beforeEach((_to, _from, next) => {
  next()
})

router.afterEach((to, _from) => {
  const _title = to.meta.title as string
  if (_title) {
    window.document.title = _title
  }
})

export default router
