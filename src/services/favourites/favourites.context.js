import react, { createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({ children }) => {
  const [favourites, setFavourites] = react.useState([]);

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      // saving error
      console.log("save favourite: ", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favourites");
      if (value !== null) {
        // value previously stored
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
      console.log("get favourites error loading...", e);
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);
  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const addFavourites = (restaurant) => {
    return setFavourites([...favourites, restaurant]);
  };
  const removeFavourites = (restaurant) => {
    const newFavourites = favourites.filter((index) => {
      return index.placeId !== restaurant.placeId;
    });

    setFavourites(newFavourites);
  };
  return (
    <FavouriteContext.Provider
      value={{ favourites, addFavourites, removeFavourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
