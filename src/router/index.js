import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import NavigationBar from '@/pages/navigationBar/navigationBar'
import Sedimentation from '@/pages/sedimentation/sedimentation'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NavigationBar',
      component: NavigationBar
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/navigationBar',
      name: 'NavigationBar',
      component: NavigationBar,
      children:[{
          path: 'sedimentation',
          name: 'Sedimentation',
          component: Sedimentation
        }
      ]
    }
  ]
})
