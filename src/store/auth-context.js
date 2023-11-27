import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (e) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const localStorageToken = localStorage.getItem("token");
  const [token, setToken] = useState(localStorageToken);
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const loggedIn = !!token;
  const values = {
    token: token,
    isLoggedIn: loggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContext;
