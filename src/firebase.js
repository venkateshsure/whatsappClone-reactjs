import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZlQZP8KVOZ1QNUS0m7XaQqEZwj3HLmFY",
  authDomain: "whatsapp-clone-2f943.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-2f943-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-2f943",
  storageBucket: "whatsapp-clone-2f943.appspot.com",
  messagingSenderId: "573527895482",
  appId: "1:573527895482:web:290b4e0a9f998e3ed38183",
  measurementId: "G-2MZ4NEPMGF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
//export default db;
//export { firebase, db, auth, provider };
