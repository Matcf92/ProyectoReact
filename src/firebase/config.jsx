// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJp0wEern2_nhMkZIIXeK7ZTEv9KRQDz8",
    authDomain: "proyecto-react-mato.firebaseapp.com",
    projectId: "proyecto-react-mato",
    storageBucket: "proyecto-react-mato.appspot.com",
    messagingSenderId: "108150002389",
    appId: "1:108150002389:web:50d2b4d98e1cdf5104485c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)