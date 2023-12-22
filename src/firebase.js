// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXMUbbzHD1fvEiKdmjgiuF5EkVYzt511I",
    authDomain: "admin-dashboard-dc94c.firebaseapp.com",
    projectId: "admin-dashboard-dc94c",
    storageBucket: "admin-dashboard-dc94c.appspot.com",
    messagingSenderId: "35898810241",
    appId: "1:35898810241:web:5ba672cfe6c55532aa9280",
    measurementId: "G-KFBYDKZXQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();