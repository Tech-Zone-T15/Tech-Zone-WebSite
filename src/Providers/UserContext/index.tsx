import { createContext } from 'react';


export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  console.log("lógica do User")

  return ( 
    <UserContext.Provider 
      value={{

      }}
    >
      {children}
    </UserContext.Provider>);
};
