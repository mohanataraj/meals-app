import react from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../restaurants/restaurant-compact.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/typography.component";
const FavouritesWrapper = styled(View)`
  padding: 0px;
`;

export const FavouritesBar = ({ favourites }) => {
  if (!favourites.length) {
    return null;
  }
  const navigation = useNavigation();
  return (
    <FavouritesWrapper>
      <Spacer size="medium">
        <View style={{ flexDirection: "row" }}>
          <Spacer position="right" size="medium">
            <Text variant="error">Favourites</Text>
          </Spacer>
          <Spacer>
            <AntDesign name="heart" size={15} color="red" />
          </Spacer>
        </View>
      </Spacer>
      <ScrollView horizontal showHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer position="left" size="small">
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Details", { restaurant: restaurant })
                }
              >
                <CompactRestaurantInfo key={key} restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
