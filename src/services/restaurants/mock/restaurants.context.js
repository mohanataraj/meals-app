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

  const retrieveRestaurants = (location) => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantRequest()
        .then(restaurantMappedResult)
        .then((transformedResponse) => {
          setIsLoading(false);
          setRestaurants(transformedResponse);
        })
        .catch((err) => {
          setError(err);
          //console.log("error", err);r
        });
    }, 2000);
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
