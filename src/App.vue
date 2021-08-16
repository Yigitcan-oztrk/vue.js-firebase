<template>
  <div id="app">
    <div class="card">
      <div class="card-header">
        <h3>Randevular</h3>
      </div>
      <div class="card-body">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">İsim</th>
              <th scope="col">Konu</th>
              <th scope="col">İşlem</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in books">
              <td>{{ book.name }}</td>
              <td>{{ book.subject }}</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import firebase from "firebase";

import 'firebase/storage';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDZsdkJBQTPGkRlM8twcwx06pvY8cd6ouU",
    authDomain: "books-e8d30.firebaseapp.com",
    databaseURL: "https://books-e8d30-default-rtdb.firebaseio.com",
    projectId: "books-e8d30",
    storageBucket: "books-e8d30.appspot.com",
    messagingSenderId: "979938154021",
    appId: "1:979938154021:web:96bdba4d18a86cedc051cc",
    measurementId: "G-60GMG41Y4F"
};

firebase.initializeApp(config);

const app = firebase.initializeApp(config);


var usersRef = app.database().ref("books");



export default {
  name: "App",
  firebase: {
    books: usersRef,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
