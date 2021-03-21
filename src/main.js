import Vue from 'vue'
import LoginScreen from './pages/LoginScreen';
import ElementUI from 'element-ui'

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: h => h(LoginScreen),
}).$mount('#app')
