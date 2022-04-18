// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLuD3am99y4GXvAN1Deqf_iIibTywxt2o",
  authDomain: "mozahid-router.firebaseapp.com",
  projectId: "mozahid-router",
  storageBucket: "mozahid-router.appspot.com",
  messagingSenderId: "50667362705",
  appId: "1:50667362705:web:ed818b018f8bf40a332230"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;





