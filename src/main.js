// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n 设置使用中文
import '@/style/main.scss' // global css
import '../lib/ali-icon/iconfont.css'
import '../lib/ali-icon/iconfont.js'
import Vuex from 'vuex'
import VueResource from'vue-resource'
import BaseUrl from  './App.baseUrl'
import Utils from '@/utils/utils'

// 通过模块倒入的话，还需要在模块中显式的安装
Vue.use(Vuex);
Vue.use(ElementUI, { locale });
Vue.use(VueResource);
Vue.use(BaseUrl);
Vue.use(Utils);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: (h) => h(App)
});