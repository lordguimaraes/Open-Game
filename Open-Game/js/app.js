angular.module('app', ['ui.router', 'firebase', 'ngFileUpload']);

var config = {
    apiKey: "AIzaSyDeko7ZdGZhuWh8PsejcdXHUxH5eKjI50A",
    authDomain: "open-game-861b3.firebaseapp.com",
    databaseURL: "https://open-game-861b3.firebaseio.com",
    projectId: "open-game-861b3",
    storageBucket: "gs://open-game-861b3.appspot.com",
    messagingSenderId: "574595088527"
  };
  firebase.initializeApp(config);