// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import App from './App'
import router from './router'
import locale from 'element-ui/lib/locale/lang/en'

// import vueResource from 'vue-resource'
import https from "../config/https"
import axios from 'axios'

// import global_ from '../config/https.js'
// Vue.prototype.global=global_;
// axios.default.baseUrl=global_.BASE_URL;
Vue.prototype.$ajax=axios;
import QS from 'qs'
Vue.prototype.qs = QS;
Vue.prototype.$https=https;

Vue.use(ElementUI, { locale })
// Vue.use(vueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
