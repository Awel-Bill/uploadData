import Vue              from 'vue'
import Router           from 'vue-router'
import Login            from '@/pages/login/login'
import Home             from '@/pages/home/home'
import DataUploadRouter from '@/router/dataUpload.router'
import NotFound         from '@/pages/notFound/notFound'

Vue.use(Router);

export default new Router({
  routes: [{
    path      : '/',
    name      : 'home',
    redirect  : '/home',
    component : Home,
  },{
    path      : '/home',
    name      : 'home',
    component : Home,
  }, {
    path      : '/login',
    name      : 'login',
    component : Login,
  },{
    path      : '*',
    name      : 'notFound',
    component : NotFound,
  },
    DataUploadRouter,
  ]
})
