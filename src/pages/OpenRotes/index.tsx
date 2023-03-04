import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const OpenRotes = () => {

  const token = localStorage.getItem('@kenziebook:@TOKEN')

  return(
    token
    ?
    <Navigate to='/shop' />
    :
    <Outlet/>
  )
}

export default OpenRotes;