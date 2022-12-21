import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ActivityIndicator, MD2Colors, Colors } from "react-native-paper";
import { View, FlatList, Text, TouchableOpacity, Platform } from "react-native";

// Relative imports...
import { SafeArea } from "./utility/screen.utility";
import { RestaurantCard } from "../components/restaurant/restaurant-card.component";
import { RestaurantContext } from "../../../services/restaurants/mock/restaurants.context";
import { LocationContext } from "../../../services/locations/locations.context";
import { SearchBar } from "../components/search/search.component";
import { FavouriteContext } from "../../../services/favourites/favourites.context";
import { FadeIn } from "../../../components/animations/fade.animation";
const SearchContainer = styled(View)`
  //flex: no - hence grows dynamically
  padding: ${(props) => props.theme.space[2]};
  background-color: #fff; //make it container color...
  align-items: center;
`;

export const RestaurantListContainer = styled.View`
  background-color: #fff;

  // padding: ${(props) => props.theme.space[0]};
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    backgroundColor: "white",
    alignSelf: "center",
    alignItems: "center",
  },
})``;

export const RestaurantScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  const { search, location, keyword } = useContext(LocationContext);
  const { favourites } = useContext(FavouriteContext);
  const [isToggled, setIsToggled] = useState(false);

  const onChangeSearch = (query) => {
    return search(query);
  };
  console.log("FAvourites", favourites.length, "Toggled: ", isToggled);
  return (
    <SafeArea>
      <FadeIn>
        <SearchBar
          isFavouritesToggled={isToggled}
          onFavouritesToggle={() => setIsToggled(!isToggled)}
        />
        {isLoading && (
          <View>
            <ActivityIndicator size={50} animating={true} color="red" />
          </View>
        )}
        <RestaurantListContainer key={restaurants.name}>
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Details", { restaurant: item })
                  }
                >
                  <RestaurantCard restaurant={item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </RestaurantListContainer>
      </FadeIn>
    </SafeArea>
  );
};
