import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FavouriteContext } from "../../services/favourites/favourites.context";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const FavouriteButton = styled(TouchableOpacity)`
  background-color: transparent;
  border-color: #20232a;
  position: absolute;
  top: 110px;
  right: -10px;
  width: 64px;
  z-index: 9;
`;

export const FavouriteComponent = ({ restaurant }) => {
  const { favourites, addFavourites, removeFavourites } =
    useContext(FavouriteContext);
  const isFavourite = favourites.find((index) => {
    return index.placeId === restaurant.placeId;
  });
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite ? addFavourites(restaurant) : removeFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
