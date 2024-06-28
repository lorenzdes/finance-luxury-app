import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import FinancialPlanning from './views/FinancialPlanning.vue';
import LuxuryDiscovery from './views/LuxuryDiscovery.vue';
import LoginPage from './components/LoginPage.vue'
const routes = [
  { path: '/', component: HomePage },
  { path: '/financial', component: FinancialPlanning },
  { path: '/luxury', component: LuxuryDiscovery },
  { path: '/login', component: LoginPage },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
