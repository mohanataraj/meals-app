import { createContext, useEffect, useState, useContext } from "react";

import { restaurantMappedResult } from "../../Utils/restaurantutility";
import { restaurantRequest } from "./restaurants.service";
import { LocationContext } from "../../../services/locations/locations.context";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = async (location) => {
    setIsLoading(true);
    await restaurantRequest(location)
      .then(restaurantMappedResult)
      .then((transformedResponse) => {
        setIsLoading(false);
        console.log("Transformed Response size: ", transformedResponse.length);
        setRestaurants(transformedResponse);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    retrieveRestaurants(location);
  }, [location]);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
