// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomePage.vue'),
      },
      {
        path: '/nosotros',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '@/views/AboutPage.vue'),
      },
      {
        path: '/seguros',
        name: 'Insurances',
        component: () => import(/* webpackChunkName: "insurances" */ '@/views/InsurancesPage.vue'),
      },
      {
        path: '/atencion-empresas',
        name: 'Companies',
        component: () => import(/* webpackChunkName: "companies" */ '@/views/CompaniesPage.vue'),
      },
      {
        path: '/contacto',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "contact" */ '@/views/ContactPage.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
