// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Quasar from './plugins/quasar'
import './css/theme'
import Clipboard from './plugins/clipboard'
import Notify from './plugins/PpNotify'
import VTouch from './plugins/vuetouch'

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


[Quasar, Clipboard, Notify, VTouch].forEach(plugin => plugin({
  app,
  router,
  Vue
}));

export const vm = new Vue(app);
