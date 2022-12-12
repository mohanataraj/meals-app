import react, { createContext } from "react";

export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({ children }) => {
  const [favourites, setFavourites] = react.useState([]);

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
