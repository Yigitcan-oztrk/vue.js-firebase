import Vue from 'vue'

import firebase from 'firebase/app';
import 'firebase/database'; 
import 'firebase/storage';  


import App from './App.vue'

Vue.use(firebase)

new Vue({
  el: '#app',
  render: h => h(App)
})
