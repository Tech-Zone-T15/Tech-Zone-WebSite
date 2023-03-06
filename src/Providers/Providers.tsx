import React from "react";
import { ProfileProvider } from "./ProfileContext";
import { UserProvider } from "./UserContext";
import { IDefaultProviderProps } from "./UserContext/@types";

export const Providers = ({ children }: IDefaultProviderProps) => (
   <UserProvider>
      <ProfileProvider>{children}</ProfileProvider>
   </UserProvider>
);
