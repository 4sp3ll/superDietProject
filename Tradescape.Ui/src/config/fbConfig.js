import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBDNxAq2VR7_qGY1Mp-E9nUjnaLMrOqbu4",
    authDomain: "lowcarboapp.firebaseapp.com",
    projectId: "lowcarboapp",
    storageBucket: "lowcarboapp.appspot.com",
    messagingSenderId: "897216421476",
    appId: "1:897216421476:web:70b6eeb9eb61f84f95c971"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase