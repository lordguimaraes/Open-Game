angular.module('app', ['ui.router', 'firebase']);

var config = {
    apiKey: "AIzaSyA4JLbYlg-ItT-kmRdgR7CNsOrBVA2swGs",
    authDomain: "teste-projeto-c2b9b.firebaseapp.com",
    databaseURL: "https://teste-projeto-c2b9b.firebaseio.com",
    projectId: "teste-projeto-c2b9b",
    storageBucket: "teste-projeto-c2b9b.appspot.com",
    messagingSenderId: "218855459470"
  };
  firebase.initializeApp(config);