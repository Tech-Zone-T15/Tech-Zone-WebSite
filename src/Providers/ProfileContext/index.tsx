import React from 'react';
import { createContext } from 'react';

export const ProfileContext = createContext({});

export const ProfileProvider = ({ children }) => {
  console.log("lógica do Profile")

  return ( 
    <ProfileContext.Provider 
      value={{

      }}
    >
      {children}
    </ProfileContext.Provider>);
};