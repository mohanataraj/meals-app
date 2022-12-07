import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
//Relative Imports...
import { RestaurantScreen } from "../../../src/features/restaurants/screens/restaurants.screen";
import { MapScreen } from "../../../src/features/restaurants/screens/map.screen";
import { SettingScreen } from "../../../src/features/restaurants/screens/settings.screen";
import { RestaurantsNavigator } from "./restaurants.navigator";
//Context Imports....

export const AppNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
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
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
