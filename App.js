import React, { useState, useEffect } from "react"
// RUN IN TERMINAL APP: yarn expo start -c
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

// theme:
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/index'

// expo google fonts package: expo install expo-font
// expo install @expo-google-fonts/name_of_font ie oswald/lato
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

// navigator:
import { Navigation } from './src/infrastructure/navigation/index'

//authentication firebase:
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context"

//ENV:  yarn add react-native-dotenv

// FIREBASE: npx expo install firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // For authentication
import { getFirestore } from "firebase/firestore";  // If using Firestore

const firebaseConfig = {
  // apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID
  apiKey: "AIzaSyCCJiM_9jcLCfKF2YU116ycxTSeUS9VyOQ",
  authDomain: "mealstogo-33c47.firebaseapp.com",
  projectId: "mealstogo-33c47",
  storageBucket: "mealstogo-33c47.firebasestorage.app",
  messagingSenderId: "895205518097",
  appId: "1:895205518097:web:622494341faaade1d3fab0",
  measurementId: "G-B2FJLM3B18"
};

console.log("from env file api key= " + process.env.EXPO_PUBLIC_FIREBASE_API_KEY)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// console.log(StatusBar.currentHeight)   //returns null for ios
export default function App() {

  // load fonts here:
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation>

          </Navigation>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

// STEPS TO PUBLISH APP ON EXPO: app visible under Projects on https://expo.dev/accounts/akshitapathak
// 1. npm install -g eas-cli
// 2. eas update:configure
// 3. eas update