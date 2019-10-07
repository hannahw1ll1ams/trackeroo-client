import React from "react";

const AuthenticationContext = React.createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {}
});

export const AuthenticationProvider = AuthenticationContext.Provider;
export const AuthenticationConsumer = AuthenticationContext.Consumer;
export default AuthenticationContext;
