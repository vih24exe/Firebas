import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(BootstrapVue, VueAxios, Axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
