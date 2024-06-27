import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: {
      name: 'John Doe',
      preferences: ['Fashion', 'Travel', 'Dining']
    },
    financial: {
      budget: 10000,
      savings: 20000,
      investments: [
        { name: 'Stocks', amount: 5000 },
        { name: 'Bonds', amount: 3000 },
      ]
    }
  },
  mutations: {},
  actions: {},
  getters: {},
});

export default store;
