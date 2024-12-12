import { createRouter, createWebHistory } from 'vue-router'
import SubscriptionPage from '@/views/SubscriptionPage.vue'
import FooterZeuxis from '@/views/FooterZeuxis.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FooterZeuxis,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
 
  ],
})

export default router
