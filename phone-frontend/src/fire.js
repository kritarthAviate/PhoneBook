import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "phone-book-37ccf.firebaseapp.com",
  projectId: "phone-book-37ccf",
  storageBucket: "phone-book-37ccf.appspot.com",
  messagingSenderId: "1003829700827",
  appId: "1:1003829700827:web:f9984c07e6c1ceb7a304fe",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default fire;
