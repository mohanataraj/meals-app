import react, { createContext } from "react";

import { useState } from "react/cjs/react.development";
import { useEffect } from "react/cjs/react.production.min";
import { locationRequest, locationTransform } from "./locations.service";

export const LocationContext = createContext({
  isLoading: false,
  error: "Loading...",
  location: "san francisco",
  search: () => null,
  keyword: "san francisco",
});

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState(keyword);
  const [location, setLocation] = useState(location);
  const [isLoading, setisLoading] = useState(isLoading);
  const [error, setError] = useState(error);
  const onSearch = (searchKeyword) => {
    if (!searchKeyword.length) {
      return;
    }
    setisLoading(true);
    setKeyword(searchKeyword.toLowerCase());

    locationRequest(searchKeyword)
      .then(locationTransform)
      .then((result) => {
        setisLoading(false);
        setLocation(result);
        console.log("Result:", result);
      })
      .catch((err) => {
        setisLoading(false);
        setError(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{ keyword, location, isLoading, error, search: onSearch }}
    >
      {children}
    </LocationContext.Provider>
  );
};
