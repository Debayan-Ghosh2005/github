import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyC7lnVupyH9lvPn_ISTdkQtB5WKBVHeEVw",
  authDomain: "contact-from-fcc0f.firebaseapp.com",
  databaseURL: "https://contact-from-fcc0f-default-rtdb.firebaseio.com",
  projectId: "contact-from-fcc0f",
  storageBucket: "contact-from-fcc0f.appspot.com",
  messagingSenderId: "455391801118",
  appId: "1:455391801118:web:4c573d67292567f380a30f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);