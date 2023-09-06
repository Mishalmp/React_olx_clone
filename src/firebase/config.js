import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvoTkPZ-95rlNYqkMYTlV1KiqaWTl_9ko",
    authDomain: "olx-clone-2a76f.firebaseapp.com",
    projectId: "olx-clone-2a76f",
    storageBucket: "olx-clone-2a76f.appspot.com",
    messagingSenderId: "787132522397",
    appId: "1:787132522397:web:cf1f9b7e52fea6808d1974",
    measurementId: "G-0HN0ERRMXG"
  };

export  default firebase.initializeApp(firebaseConfig)