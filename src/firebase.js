import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBIDF7cJNENZsV-rZduidUaGh_4YXjN3NE",
    authDomain: "beauty-car-11cf8.firebaseapp.com",
    projectId: "beauty-car-11cf8",
    storageBucket: "beauty-car-11cf8.appspot.com",
    messagingSenderId: "599446450316",
    appId: "1:599446450316:web:05a87e8a3b6a9524c60ba9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;