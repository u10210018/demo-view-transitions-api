const routes = [
  {
    path: '/',
    name: 'index',
    title: '首頁',
    component: () => import('@/pages/HomeView.vue'),
  },
  {
    path: '/pokemon',
    name: 'list',
    title: '清單頁',
    component: () => import('@/pages/ListView.vue'),
  },
  {
    path: '/pokemon/:name',
    name: 'detail',
    title: '詳細頁',
    component: () => import('@/pages/DetailView.vue'),
  },
]

export default routes
