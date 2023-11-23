const routes = [
  {
    path: '/',
    name: 'index',
    title: '首頁',
    component: () => import('@/pages/HomeView.vue'),
  },
  {
    path: '/list',
    name: 'list',
    title: '清單頁',
    component: () => import('@/pages/ListView.vue'),
  },
  {
    path: '/detail/:id',
    name: 'detail',
    title: '詳細頁',
    component: () => import('@/pages/DetailView.vue'),
  },
]

export default routes
