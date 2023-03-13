import { userInfo } from 'os';
import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../../Providers/UserContext';

const ProtectedRotes = () => {

   const {user} = useContext(UserContext)

   const token = localStorage.getItem('@TOKEN')
   
   return(
   token
    ?
    <Outlet/>
    :
    <Navigate to='/' />
   )
}

export default ProtectedRotes;