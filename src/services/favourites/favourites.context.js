import react, { createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../firebase/authentication/authentication.context";

export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({ children }) => {
  const { user } = react.useContext(AuthenticationContext);
  const [favourites, setFavourites] = react.useState([]);

  const saveFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      // saving error
      console.log("save favourite: ", e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
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
    if (user && user.uid) {
      loadFavourites(user.uid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favourites.length) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

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
