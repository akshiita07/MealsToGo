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

// SERVICES:
import { RestaurantContextProvider } from './src/services/restaurants/restaurants.context'
import { LocationContextProvider } from './src/services/location/location.context'
import { FavouritesContextProvider } from './src/services/favourites/favourites.context'

// navigator:
import { Navigation } from './src/infrastructure/navigation/index'

//ENV:  yarn add react-native-dotenv

// FIREBASE: npx expo install firebase
// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// console.log(process.env.FIREBASE_API_KEY)

// Initialize Firebase
const firebaseConfig = {
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID,
  // measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// if (!firebase.apps.length) {
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// }


// console.log(StatusBar.currentHeight)   //returns null for ios
export default function App() {

  // firebase authentication:
  const [isAuthenticated, setAsAuthenticated] = useState(false)
  useEffect(() => {
    signInWithEmailAndPassword(auth, "pathakshita07@gmail.com", process.env.FIREBASE_PASSWORD).then((user) => {
      console.log(user)
      setAsAuthenticated(user)
    }).catch((e) => {
      console.log(e)
    })
  }, [])

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
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <Navigation>

              </Navigation>
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider >
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
