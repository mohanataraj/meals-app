import react, { useState, createContext } from "react";

import firebase from "firebase/compat/app";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((user) => {
        setUser(user);
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setIsAuthenticated(false);
        setError(e.toString());
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        isAuthenticated,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
