import react, { createContext, useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./locations.service";

export const LocationContext = createContext({
  isLoading: false,
  error: "Loading...",
  location: "san francisco",
  search: () => null,
  keyword: "san francisco",
});

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(location);
  const [isLoading, setisLoading] = useState(isLoading);
  const [error, setError] = useState(error);
  const onSearch = (keyword) => {
    setisLoading(true);
    setKeyword(keyword.toLowerCase());
  };
  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword)
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
  }, [keyword]);
  return (
    <LocationContext.Provider
      value={{ keyword, location, isLoading, error, search: onSearch }}
    >
      {children}
    </LocationContext.Provider>
  );
};
