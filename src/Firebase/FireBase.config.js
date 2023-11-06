// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId
  apiKey: "AIzaSyDhtUSWk4cfksR6CvnWH5fc127mm3-NWRk",
  authDomain: "online-group-study-86949.firebaseapp.com",
  projectId: "online-group-study-86949",
  storageBucket: "online-group-study-86949.appspot.com",
  messagingSenderId: "322184971698",
  appId: "1:322184971698:web:d3bf2b670161e045c890ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;