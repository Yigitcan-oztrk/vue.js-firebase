import Vue from 'vue'
import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage


const config = {
  apiKey: "AIzaSyDZsdkJBQTPGkRlM8twcwx06pvY8cd6ouU",
  authDomain: "books-e8d30.firebaseapp.com",
  databaseURL: "https://books-e8d30-default-rtdb.firebaseio.com",
  projectId: "books-e8d30",
  storageBucket: "books-e8d30.appspot.com",
  messagingSenderId: "979938154021",
  appId: "1:979938154021:web:96bdba4d18a86cedc051cc",
  measurementId: "G-60GMG41Y4F",
};
var fire = firebase.initializeApp(config);
export default fire;

Vue.use(firebase)

new Vue({
  el: '#app',
  render: h => h(App)
})
