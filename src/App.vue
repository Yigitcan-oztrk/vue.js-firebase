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

import firebase from '../src/firebase/config'




export default {
  name: "App",
  firebase: {
    books: bookRef,
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
