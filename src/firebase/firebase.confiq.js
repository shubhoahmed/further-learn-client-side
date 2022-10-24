// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdMUN_fVFFQuPQqGQH-8TO3NvYPsq0lCA",
    authDomain: "further-learn.firebaseapp.com",
    projectId: "further-learn",
    storageBucket: "further-learn.appspot.com",
    messagingSenderId: "341046884698",
    appId: "1:341046884698:web:49778783b6d9f2c50fdb63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;