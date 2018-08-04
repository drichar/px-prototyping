import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(BootstrapVue)

Vue.prototype.$eventBus = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})
