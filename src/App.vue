<template>
  <div id="app" class="container">
    <h1>{{ msg }}</h1>
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
              <td>{{book.name}}</td>
              <td>{{book.subject}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>



import fire from './main';

class App extends Component {
    componentWillMount(){
        let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    }
}
export default {
  name: "app",
  firebase: {
    books: bookRef,
  },
  data() {
    return {
      msg: "Randevu listesine Hoş Geldiniz",
    };
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

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
