import React, { useState, useEffect } from "react";
import { Platform, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Fragment } from "react/cjs/react.production.min";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

//Relative Imports...
import { theme } from "./src/infrastructure/theme";

//Context Imports....
import { RestaurantContextProvider } from "./src/services/restaurants/mock/restaurants.context";
import { LocationContextProvider } from "./src/services/locations/locations.context";
// Navigator Import
import { Navigation } from "./src/infrastructure/navigation";
import { FavouriteContextProvider } from "./src/services/favourites/favourites.context";

//firebase authentication and authorization...
//import { app } from "./src/services/firebase/config/firebase.config";
//import { getApps, initializeApp } from "firebase/app";
// firebase v9 uses compat/app...
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { firebaseConfig } from "./src/services/firebase/config/firebase.config";
import { AuthenticationContextProvider } from "./src/services/firebase/authentication/authentication.context";

// const firebaseConfig = {
//   apiKey: "AIzaSyA8o3m-MDV0Cap-9HvPKf07xCLdzyVfM2U",
//   authDomain: "mealstogo-36893.firebaseapp.com",
//   projectId: "mealstogo-36893",
//   storageBucket: "mealstogo-36893.appspot.com",
//   messagingSenderId: "288995050543",
//   appId: "1:288995050543:web:0ed7bbd0c9e54384d5f2da",
// };

// Initialize Firebase... only once...
firebase.initializeApp(firebaseConfig);

const isAndroid = Platform.OS === "android";

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
  //const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouriteContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouriteContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </Fragment>
  );
}
