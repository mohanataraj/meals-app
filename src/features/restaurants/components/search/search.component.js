import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";

// Relative imports...
import { LocationContext } from "../../../../services/locations/locations.context";
import { FavouritesBar } from "../../../../components/favourite/favourites-bar.component";
import { FavouriteContext } from "../../../../services/favourites/favourites.context";
//Location service...

const SearchContainer = styled(View)`
  //flex: no - hence grows dynamically
  padding: ${(props) => props.theme.space[2]};
  background-color: #fff; //make it container color...
  align-items: center;
`;

export const SearchBar = ({ isFavouritesToggled, onFavouritesToggle }) => {
  // eslint-disable-next-line prettier/prettier
  const { keyword, isLoading, location, search, error } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  const { favourites } = useContext(FavouriteContext);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  const onChangeSearch = (query) => {
    setSearchKeyword(query);
  };
  const callSearch = () => {
    search(searchKeyword.trim().toLowerCase());
  };

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        onChangeText={onChangeSearch}
        value={searchKeyword}
        onSubmitEditing={callSearch}
        keyboardAppearance="dark"
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={() => {
          return onFavouritesToggle();
        }}
      />
      {isFavouritesToggled && <FavouritesBar favourites={favourites} />}
    </SearchContainer>
  );
};
