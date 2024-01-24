// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs3Mo80ypFNycEwfDbbtnCEsavpB4VS-E",
  authDomain: "gravity-e0353.firebaseapp.com",
  projectId: "gravity-e0353",
  storageBucket: "gravity-e0353.appspot.com",
  messagingSenderId: "795729836025",
  appId: "1:795729836025:web:2b28410143bfbfaf612f28",
  measurementId: "G-F06X8TF3TL"
};

// Initialize Firebase
let app;
if (firebase.apps.length===0){
    app= firebase.initializeApp(firebaseConfig);
} else{
    app= firebase.app()
}

const auth = firebase.auth()

export {auth};