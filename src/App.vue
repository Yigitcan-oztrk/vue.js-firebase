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
            <tr v-for="book in meeting">
              <td>{{ book.name }}</td>
              <td>{{ book.subject }}</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from "firebase";

let config = {
  apiKey: "AIzaSyDOsHF7SbXlpdjJs06f4Yvhd7u0xcK9ZFo",
  authDomain: "meeting-7b35c.firebaseapp.com",
  databaseURL: "https://meeting-7b35c-default-rtdb.firebaseio.com",
  projectId: "meeting-7b35c",
  storageBucket: "meeting-7b35c.appspot.com",
  messagingSenderId: "239976746963",
  appId: "1:239976746963:web:933c0b1421098602772926",
  measurementId: "G-XM8S3TE2ZR",
};
let app = Firebase.initializeApp(config);
let db = app.database();
let bookRef = db.ref("meeting");

export default {
  name: "App",

  firebase: {
    meeting: bookRef,
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
