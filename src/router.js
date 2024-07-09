import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import FinancialPlanning from './views/FinancialPlanning.vue';
import LuxuryDiscovery from './views/LuxuryDiscovery.vue';
import LoginPage from './components/LoginPage.vue'
import store from '@/store';

const routes = [
  { path: '/', component: HomePage, meta: { requiresAuth: true }},
  { path: '/financial', component: FinancialPlanning, meta: { requiresAuth: true }},
  { path: '/luxury', component: LuxuryDiscovery, meta: { requiresAuth: true } },
  { path: '/login', component: LoginPage },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next('/login'); // Redirect to the registration page if not authenticated
    } else {
      next(); // Proceed to the route
    }
  } else {
    next(); // Proceed to the route
  }
});

export default router;