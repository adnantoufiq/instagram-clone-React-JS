// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';





const firebaseConfig = {
    apiKey: "AIzaSyCQhEhZwaiJx4kPcgNg4QcuQ7Rgi0ZwZZk",
    authDomain: "instagram-clone-9a376.firebaseapp.com",
    projectId: "instagram-clone-9a376",
    storageBucket: "instagram-clone-9a376.appspot.com",
    messagingSenderId: "662543235576",
    appId: "1:662543235576:web:8c5df3dfbfebf4077dfe0d",
    measurementId: "G-WCN3C5FYLE"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)

  const db= firebaseApp.firestore()
  const auth= firebase.auth()
  const storage= firebase.storage()
  export  {db ,auth, storage};