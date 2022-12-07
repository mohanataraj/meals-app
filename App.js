import React from "react";
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

const isAndroid = Platform.OS === "android";

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <Navigation />
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </Fragment>
  );
}
