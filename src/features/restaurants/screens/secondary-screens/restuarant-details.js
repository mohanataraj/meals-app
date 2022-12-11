import react from "react";
import { List } from "react-native-paper";
import { SafeArea } from "../utility/screen.utility";
import { RestaurantCard } from "../../components/restaurant/restaurant-card.component";

import { RestaurantMenuList } from "./restaurant.menu";
export const RestaurantDetails = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantCard restaurant={restaurant} />
      <RestaurantMenuList />
    </SafeArea>
  );
};
