// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCtrqvBN148jNLXSFCliHP1HSG2WrbpA4Y",
//   authDomain: "clone-yt-15377.firebaseapp.com",
//   databaseURL: "https://clone-yt-15377-default-rtdb.firebaseio.com",
//   projectId: "clone-yt-15377",
//   storageBucket: "clone-yt-15377.appspot.com",
//   messagingSenderId: "524878948516",
//   appId: "1:524878948516:web:8a9d2bc1ab626b361d9e31"
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);

// const provider = new GoogleAuthProvider();

// export { db, auth, provider };





// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



// const firebaseConfig = {
//   apiKey: "AIzaSyDNXEhe1KAojc8korrZ1HG9Z-28do1sRII",
//   authDomain: "linkedin-clone-yt-a20f5.firebaseapp.com",
//   projectId: "linkedin-clone-yt-a20f5",
//   storageBucket: "linkedin-clone-yt-a20f5.appspot.com",
//   messagingSenderId: "263576666829",
//   appId: "1:263576666829:web:800eb301a62ca6ff039f84",
//   measurementId: "G-3WVQKCQEV2"
// };


const firebaseConfig = {
  apiKey: "AIzaSyBu7Nr2Ci-CBanZehwoyABl4xEmP4MBwaU",
  authDomain: "clone-yt-c484e.firebaseapp.com",
  projectId: "clone-yt-c484e",
  storageBucket: "clone-yt-c484e.appspot.com",
  messagingSenderId: "880441344550",
  appId: "1:880441344550:web:1758f16aa8858da5929ce7"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

