import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";

import { RestaurantDetails } from "../../features/restaurants/screens/secondary-screens/restuarant-details";
const RestaurantStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantScreen}
        options={{
          headerShown: false,
        }}
      />
      <RestaurantStack.Screen name="Details" component={RestaurantDetails} />
    </RestaurantStack.Navigator>
  );
};
