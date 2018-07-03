import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Home from '@/pages/home/home'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path      : '/',
      name      : 'home',
      redirect  : '/home',
      component : Home,
      hidden    : true,
      children  : [{
        path:'home',
        name:'home'

      }]
    },
    {
      path      : '/login',
      name      : 'Login',
      component : Login ,
      hidden    : true,
    },
  ]
})
