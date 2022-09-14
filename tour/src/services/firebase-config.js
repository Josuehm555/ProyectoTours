import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCVUK41_Q4yMgzMpSAEYzJpJE-ijUjqrHc",
  authDomain: "costaricatours-2735d.firebaseapp.com",
  projectId: "costaricatours-2735d",
  storageBucket: "costaricatours-2735d.appspot.com",
  messagingSenderId: "956626957329",
  appId: "1:956626957329:web:65380a5ee5fc0425082db0",
  measurementId: "G-XV72ENX90J",
};

firebase.initializeApp( firebaseConfig );
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const db2 = firebase.firestore()

export {
  db,
  db2,
  app,
  firebase
}