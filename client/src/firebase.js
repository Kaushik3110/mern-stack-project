// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-cfa05.firebaseapp.com",
  projectId: "mern-estate-cfa05",
  storageBucket: "mern-estate-cfa05.appspot.com",
  messagingSenderId: "580804045164",
  appId: "1:580804045164:web:0c4f54fea5b50cb06deb49"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);