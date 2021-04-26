import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpQrLmKKIvs7Sn8O--8Ax3nOkJZ90JfIo",
  authDomain: "fir-todoapp-28df4.firebaseapp.com",
  projectId: "fir-todoapp-28df4",
  storageBucket: "fir-todoapp-28df4.appspot.com",
  messagingSenderId: "325334338280",
  appId: "1:325334338280:web:a78919c16f67f17df1d75d",
  measurementId: "G-D2X8PNJM8R"
};
const firebasecon=firebase.initializeApp(firebaseConfig);
const db=firebasecon.firestore();

export {db};
