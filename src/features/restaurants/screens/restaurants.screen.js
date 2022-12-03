import React, { useState, useContext } from "react";
import styled from "styled-components";
import {
  Searchbar,
  ActivityIndicator,
  MD2Colors,
  Colors,
} from "react-native-paper";
import { View, FlatList, Text } from "react-native";

// Relative imports...
import { SafeArea } from "./utility/screen.utility";
import { RestaurantInfo } from "../components/restaurant/restaurant-info.component";
import { RestaurantContext } from "../../../services/restaurants/mock/restaurants.context";
import { LocationContext } from "../../../services/locations/locations.context";
import { SearchBar } from "../components/search/search.component";
const SearchContainer = styled(View)`
  //flex: no - hence grows dynamically
  padding: ${(props) => props.theme.space[2]};
  background-color: #fff; //make it container color...
  align-items: center;
  justify-content: "center";
`;

const RestaurantListContainer = styled.View`
  background-color: #fff;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;

  // padding: ${(props) => props.theme.space[0]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 0,
  },
})``;

// const RestaurantInfoContainer = styled(RestaurantInfo)`
//   background-color: #fff;
//   align-items: "left";
//   justify-content: "center";
// `;

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  const { search, location, keyword } = useContext(LocationContext);
  //console.log("LOC...", locationContext);

  const onChangeSearch = (query) => {
    return search(query);
  };

  return (
    <SafeArea>
      <SearchBar />
      {isLoading && (
        <View>
          <ActivityIndicator size={50} animating={true} color="red" />
        </View>
      )}
      <RestaurantListContainer key={restaurants.name}>
        <RestaurantList
          data={restaurants}
          numColumns={2}
          horizontal={false}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => {
            //console.log("ITEM: ", item);
            return <RestaurantInfo restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      </RestaurantListContainer>
    </SafeArea>
  );
};
