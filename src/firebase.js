import firebase, { firestore } from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBjpH8QgcVkE3Q960dsS3Eugv0kRzLQQps",
  authDomain: "facebook-clone-6f5e0.firebaseapp.com",
  projectId: "facebook-clone-6f5e0",
  storageBucket: "facebook-clone-6f5e0.appspot.com",
  messagingSenderId: "701190955953",
  appId: "1:701190955953:web:d4f7ad16f0464a9133d390",
  measurementId: "G-NZ6Z78BQR7",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
