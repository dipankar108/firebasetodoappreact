import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // Your config files are here
};
const firebasecon = firebase.initializeApp(firebaseConfig);
const db = firebasecon.firestore();

export {
  db
};