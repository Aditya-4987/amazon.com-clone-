// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATOJds_dILgt_Cr7wj8kKnVjrgJxIm5tc",
  authDomain: "clone-a9f85.firebaseapp.com",
  projectId: "clone-a9f85",
  storageBucket: "clone-a9f85.firebasestorage.app",
  messagingSenderId: "1047436514475",
  appId: "1:1047436514475:web:b77e16ba08e70af00553ee",
  measurementId: "G-FZVLQFY6DB",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
