import Vue from 'vue'
import ElementUI from 'element-ui';
import router from './router/index';
import App from './App';
import {store} from './store/index';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')