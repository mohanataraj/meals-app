import react, { useEffect } from "react";

import {
  createNativeStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/native-stack";
import { SettingScreen } from "../../features/restaurants/screens/settings.screen";
import { FavouriteScreen } from "../../features/restaurants/screens/favourites.screen";

const SettingStack = createNativeStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingStack.Navigator headerMode="screen">
      <SettingStack.Screen
        options={{ header: () => null }}
        name="Settings"
        component={SettingScreen}
      />
      <SettingStack.Screen name="Favourites" component={FavouriteScreen} />
    </SettingStack.Navigator>
  );
};
