import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";
import { Text } from "react-native";
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
      <RestaurantStack.Screen
        name="Details"
        component={() => <Text>Restaurant Details</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
