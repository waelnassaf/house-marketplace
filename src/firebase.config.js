import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAN2JEopYpZ27kFtHQ6Hn2d2XNVAGMo6Ho",
    authDomain: "house-marketplace-app-17a95.firebaseapp.com",
    projectId: "house-marketplace-app-17a95",
    storageBucket: "house-marketplace-app-17a95.appspot.com",
    messagingSenderId: "651286498102",
    appId: "1:651286498102:web:6cd91e9323216d99848197",
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
