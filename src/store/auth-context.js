import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggenIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthProvider = (props) => {
  const [token, setToken] = useState(null);
  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const userIsLoggedIn = !!token; //if notempty return true or false

  const values = {
    token: token,
    isLoggenIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContext;
