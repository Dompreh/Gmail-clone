import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDzoabRerRVEeOyeZ229oafH4PKlZxZH9s",
    authDomain: "clone-a01a0.firebaseapp.com",
    projectId: "clone-a01a0",
    storageBucket: "clone-a01a0.appspot.com",
    messagingSenderId: "794031925314",
    appId: "1:794031925314:web:999f341fc58a61145f25db"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth= firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider}