/* eslint-disable react/no-unstable-nested-components */
import React, { useContext } from "react";
import { Platform, StatusBar, View, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Fragment } from "react/cjs/react.production.min";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { FontAwesome5 } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
//Relative Imports...
import { theme } from "./src/infrastructure/theme";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { MapScreen } from "./src/features/restaurants/screens/map.screen";
import { SettingScreen } from "./src/features/restaurants/screens/settings.screen";

//Context Imports....
import { RestaurantContextProvider } from "./src/services/restaurants/mock/restaurants.context";
import { LocationContextProvider } from "./src/services/locations/locations.context";
const isAndroid = Platform.OS === "android";

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                      iconName = focused ? "restaurant" : "restaurant-outline";
                    } else if (route.name === "Settings") {
                      iconName = focused ? "md-settings" : "md-settings";
                    } else if (route.name === "Map") {
                      iconName = focused ? "md-map" : "md-map";
                    }

                    // You can return any component that you like here!
                    return (
                      <Ionicons name={iconName} size={size} color={color} />
                    );
                  },
                  tabBarActiveTintColor: "tomato",
                  tabBarInactiveTintColor: "gray",
                })}
              >
                <Tab.Screen name="Home" component={RestaurantScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </Fragment>
  );
}
