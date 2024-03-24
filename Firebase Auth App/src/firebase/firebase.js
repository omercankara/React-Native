// Import the functions you need from the SDKs you need
import  firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlX5KWx4qeyIMe0NYZb-Es6m6AyGlWThc",
  authDomain: "loginproject-b7763.firebaseapp.com",
  projectId: "loginproject-b7763",
  storageBucket: "loginproject-b7763.appspot.com",
  messagingSenderId: "878776480876",
  appId: "1:878776480876:web:f3274ac10dc9dba9379449",
  measurementId: "G-MD6WD3H2SS"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth()

export { auth }