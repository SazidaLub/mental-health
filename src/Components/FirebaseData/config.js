import firebase from 'firebase/app'
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyAkSIZbgip8lidI0v7VfgSnXiIaXkAj4qc",
    authDomain: "youmatter-7b444.firebaseapp.com",
    projectId: "youmatter-7b444",
    storageBucket: "youmatter-7b444.appspot.com",
    messagingSenderId: "950100509065",
    appId: "1:950100509065:web:9bb726aa5c7d459a83a158"
  
};
firebase.initializeApp(config);
export default firebase;