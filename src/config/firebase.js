// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBwtmK_r_tajgkUp-m4JkWE3VfcGUatXjY",
    authDomain: "photo-tagging-app-f0dc6.firebaseapp.com",
    projectId: "photo-tagging-app-f0dc6",
    storageBucket: "photo-tagging-app-f0dc6.appspot.com",
    messagingSenderId: "106478397420",
    appId: "1:106478397420:web:4d6dc86a77733cf12242c9",
    measurementId: "G-2D8PLKDX50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
