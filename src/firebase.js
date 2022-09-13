// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { config } from "./data/config";

import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: config.firebaseApiKey,
  authDomain: "moses-chat-app-9d3ad.firebaseapp.com",
  databaseURL: "https://moses-chat-app-9d3ad-default-rtdb.firebaseio.com",
  projectId: "moses-chat-app-9d3ad",
  storageBucket: "moses-chat-app-9d3ad.appspot.com",
  messagingSenderId: "935977379592",
  appId: "1:935977379592:web:d2751a5d7c3cef55676ebd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    console.log(user);
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    console.log(docs);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const facebookProvider = new FacebookAuthProvider();
const signInWithFacebook = async () => {
  try {
    const response = await signInWithPopup(auth, facebookProvider);
    const user = response.user;

    // NOTE: Query the database to get information
    const q = query(collection(db, "users"), where("uid", "=="));
    console.log(q);
    const docs = await getDocs(q);
    console.log(docs);

    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "facebook",
        email: user.email,
      });
    }
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(
      "User was not found please register your email and password!" +
        "\n" +
        err.message
    );
  }
};

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logOut = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithFacebook,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logOut,
};
