// Entry point for authentication service
import { React, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/compat/app";


// firebase authentication:
export const loginRequest = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password)

// const [isAuthenticated, setIsAuthenticated] = useState(false);
// useEffect(() => {
//     setTimeout(() => {
//         signInWithEmailAndPassword(auth, "pathakshita07@gmail.com", process.env.EXPO_PUBLIC_FIREBASE_PASSWORD)
//             .then((userCredential) => {
//                 console.log(userCredential);
//                 setIsAuthenticated(true);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, 2000);
// }, []);