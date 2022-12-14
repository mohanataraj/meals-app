import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
//Relative Imports...
import { MapScreen } from "../../features/restaurants/components/map/screen/map.screen";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./setttings.navigator";
//Context Imports....
//Context Imports....
import { RestaurantContextProvider } from "../../services/restaurants/mock/restaurants.context";
import { LocationContextProvider } from "../../services/locations/locations.context";
import { FavouriteContextProvider } from "../../services/favourites/favourites.context";

export const AppNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <FavouriteContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
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
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouriteContextProvider>
  );
};
