// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Quasar from './plugins/quasar'
import './css/theme'

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = {
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
};


[Quasar].forEach(plugin => plugin({
  app,
  router,
  Vue
}));

export const vm = new Vue(app);
