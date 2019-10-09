import React from "react";

const UserContext = React.createContext({
  user: false,
  setUser: () => {}
});

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export default UserContext;
