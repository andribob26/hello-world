import Vue from 'vue'
import App from './App.vue'
import store from './stores/index'
import router from './router'
import vuetify from './plugins/vuetify'
import './index.css'

Vue.config.productionTip = false

const app = new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
})
app.$mount('#app')
