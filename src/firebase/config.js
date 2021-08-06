import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "messaging-app-da3e3.firebaseapp.com",
  projectId: "messaging-app-da3e3",
  storageBucket: "messaging-app-da3e3.appspot.com",
  messagingSenderId: "425678893820",
  appId: "1:425678893820:web:a326ff851c4e249911dd79",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

export {
  auth,
  firestore,
  analytics,
  firebase,
  useAuthState,
  useCollectionData,
};
