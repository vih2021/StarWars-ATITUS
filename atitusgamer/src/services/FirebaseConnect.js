// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_Yy6kDkn6gjJrT4Q0bx4pILFpe8SqVbU",
    authDomain: "starwarsatitus.firebaseapp.com",
    projectId: "starwarsatitus",
    storageBucket: "starwarsatitus.appspot.com",
    messagingSenderId: "1055014101400",
    appId: "1:1055014101400:web:f3fe08b8e92347822d8bed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);