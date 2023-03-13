import React, { useContext, useEffect } from "react";
import { Cube } from "../../../components/Cube";
import { UserContext } from "../../../Providers/UserContext";

export const LogOut = () => {
   const { userLogOut } = useContext(UserContext);
   useEffect(() => {
      userLogOut();
   }, []);
   return <Cube />;
};
