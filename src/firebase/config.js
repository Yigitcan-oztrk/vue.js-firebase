import firebase from "firebase/app";

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

firebase.initializeApp(config)

const books = firebase.storage();
const database=firebase.firestore

const tarih = firebase.firestore