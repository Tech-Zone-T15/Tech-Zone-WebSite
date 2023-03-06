import { createContext } from 'react';
import { IDefaultProviderProps } from './types';


export const UserContext = createContext({});

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  console.log("lógica do User")

  return ( 
    <UserContext.Provider 
      value={{

      }}
    >
      {children}
    </UserContext.Provider>);
};
