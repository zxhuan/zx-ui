// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import VueZxUI from '../lib';
import '../lib/zxhuan.css';
// import 'zx-ui/lib/zxhuan.css';
Vue.config.productionTip = false;
Vue.use(VueZxUI);
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    title: '头部'
  },
  mutations: {
    setTtile(state, str) {
      state.title = str;
    }
  },
  actions: {
    setTtile({ commit, state }, str) {
      commit('setTtile', str);
    }
  },
  getters: {
    title: state => state.title
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});