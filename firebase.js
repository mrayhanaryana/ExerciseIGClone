// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwfcvJYiGrSRk58Yg323OPQCG4N1X7yYA",
  authDomain: "socialmediaapp-3194c.firebaseapp.com",
  projectId: "socialmediaapp-3194c",
  storageBucket: "socialmediaapp-3194c.appspot.com",
  messagingSenderId: "680512863692",
  appId: "1:680512863692:web:67221bdd4a4fe6e367f169",
  measurementId: "G-KGW0TFV8RC"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default firebase