import React, { createContext, useState } from "react";

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [account, setAccount] = useState("");

  return (
    <Web3Context.Provider value={{ account, setAccount }}>
      {children}
    </Web3Context.Provider>
  );
};