import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyC_amMtstfNgzyHybyXXxWFjeLNkwlv-ug",
    authDomain: "message-clone-d6229.firebaseapp.com",
    projectId: "message-clone-d6229",
    storageBucket: "message-clone-d6229.appspot.com",
    messagingSenderId: "913448734748",
    appId: "1:913448734748:web:d6713355f9a0f99177cfd9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider  = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export {auth,googleProvider};
export default db;