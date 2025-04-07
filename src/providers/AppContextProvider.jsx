import React from "react";
import { AppContext } from "../context/AppContext";

const AppContextProvider = ({ children }) => {
  const value = {};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
