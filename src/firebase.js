import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCmGu5ePU4QPMTSsOsRf04SNEOE-sAsLUA",
    authDomain: "clone-bf1d7.firebaseapp.com",
    projectId: "clone-bf1d7",
    storageBucket: "clone-bf1d7.appspot.com",
    messagingSenderId: "541517893406",
    appId: "1:541517893406:web:f29b96d29676b93d09430f"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();  
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {db, auth, provider}; 