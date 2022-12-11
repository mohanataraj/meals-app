import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";

// Relative imports...
import { LocationContext } from "../../../../services/locations/locations.context";

//Location service...

const SearchContainer = styled(View)`
  //flex: no - hence grows dynamically
  padding: ${(props) => props.theme.space[2]};
  background-color: #fff; //make it container color...
  align-items: center;
  position: absolute;
  z-index: 999;
  width: 100%;
  top: 40px;
`;

export const SearchBar = () => {
  // eslint-disable-next-line prettier/prettier
  const { keyword, isLoading, location, search, error } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const onChangeSearch = (query) => {
    setSearchKeyword(query);
  };
  const callSearch = () => {
    search(searchKeyword.trim().toLowerCase());
  };
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        onChangeText={onChangeSearch}
        value={searchKeyword}
        onSubmitEditing={callSearch}
        keyboardAppearance="dark"
        icon="map"
      />
    </SearchContainer>
  );
};
