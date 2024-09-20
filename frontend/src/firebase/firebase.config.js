// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlWCrFKDkSor198sQcLeQALo73xKLOf8I",
  authDomain: "online-book-inventory.firebaseapp.com",
  projectId: "online-book-inventory",
  storageBucket: "online-book-inventory.appspot.com",
  messagingSenderId: "923360944090",
  appId: "1:923360944090:web:79946c0ee308414abd2ae3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
