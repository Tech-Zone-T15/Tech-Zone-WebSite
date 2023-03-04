import React from 'react';
import { createContext } from 'react';

export const DashboardContext = createContext({});

export const DashboardProvider = ({ children }) => {
  console.log("lógica do Profile")

  return ( 
    <DashboardContext.Provider 
      value={{

      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};