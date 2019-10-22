import Vue from 'vue'
import App from './App.vue'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBblxZUvS0xijUBNOUWGQ66jiQ_gvm0Ed0",
  authDomain: "mieshop.firebaseapp.com",
  databaseURL: "https://mieshop.firebaseio.com",
  projectId: "mieshop",
  storageBucket: "mieshop.appspot.com",
  messagingSenderId: "956651778264",
  appId: "1:956651778264:web:b6d989b71a2ce48c23e7ad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
