import Vue from 'vue';
import Router from 'vue-router';
import DashboardScreen from '../pages/dashboard/DashboardScreen'
import LoginScreen from '../pages/LoginScreen'
import * as PATH from './router';
import * as Constants from '../helper/constants';
import AppScreen from '../pages/AppScreen';
import ChangePasswordScreen from '../pages/user/ChangePasswordScreen';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: PATH.ROUTER_LOGIN, component: LoginScreen, name: 'login' },
    {
      path: '',
      component: AppScreen,
      children: [
        { 
          path: PATH.ROUTER_DASHBOARD, 
          component: DashboardScreen, 
          name: 'dashboard', 
          meta: {
            breadcrumb: [
              {name: 'Dashboard'}
            ]
          } 
        },
        { path: PATH.ROUTER_CHANGE_PASSWORD, component: ChangePasswordScreen, name: 'change-password' }
      ]

    }
  ]
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem(Constants.JWT_TOKEN);
  if(!PATH.PUBLIC_ROUTER.includes(to.path) && token == null) {
    return next(PATH.ROUTER_LOGIN);
  }
  if(to.path === PATH.ROUTER_LOGIN && token != null) {
    return next(PATH.ROUTER_DASHBOARD);
  }
  next();
})
export default router;