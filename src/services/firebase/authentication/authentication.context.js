import react, { useState, createContext } from "react";

import firebase from "firebase/compat/app";
import { loginRequest, onLogout, onRegister } from "./authentication.service";

export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  firebase.auth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

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
  const registerRequest = (email, password, repeatedPassword) => {
    password !== repeatedPassword
      ? setError("Passwords do not match")
      : onRegister(email, password)
          .then((u) => {
            setUser(u);
            setIsAuthenticated(true);
            setIsLoading(false);
          })
          .catch((e) => {
            setIsLoading(false);
            setError(e.toString());
          });
  };
  const logoutRequest = () => {
    setUser(null);

    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("user", firebase.auth().currentUser, "has now Signed Out");
        !firebase.auth().currentUser ? setIsAuthenticated(false) : null;
      })
      .catch((error) => {
        setError(error);
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
        registerUser: registerRequest,
        logoutRequest,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
