import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'


Vue.config.productionTip = false

new Vue({
  router,store,
  render: h => h(App)
}).$mount('#app')
