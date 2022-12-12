import react from "react";
import { Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../restaurants/restaurant-compact.component";
import { Spacer } from "../spacer/spacer.component";

const FavouritesWrapper = styled(View)`
  padding: 0px;
`;

export const FavouritesBar = ({ favourites }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showHorizontalScrollIndicator={false}
      bounces={true}
      alwaysBounceHorizontal={true}
    >
      {favourites.map((restaurant) => {
        console.log(navigation);
        const key = restaurant.name;
        return (
          <Spacer position="left" size="small">
            <Pressable
              onPress={() =>
                navigation.navigate("Details", { restaurant: restaurant })
              }
            >
              <CompactRestaurantInfo key={key} restaurant={restaurant} />
            </Pressable>
          </Spacer>
        );
      })}
    </ScrollView>
  );
};
