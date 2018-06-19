import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAuZ7zXoe7jzGLrv666fzoutty4EAp_ZaA",
    authDomain: "signup-c5167.firebaseapp.com",
    databaseURL: "https://signup-c5167.firebaseio.com",
    projectId: "signup-c5167",
    storageBucket: "signup-c5167.appspot.com",
    messagingSenderId: "1051509753384"
  };
  const fire = firebase.initializeApp(config);
  const facebookprovider = new firebase.auth.FacebookAuthProvider();
  export  { fire, facebookprovider };