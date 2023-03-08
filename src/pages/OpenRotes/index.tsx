import { Outlet, Navigate } from 'react-router-dom';

const OpenRotes = () => {

  const token = localStorage.getItem('@TOKEN')

  return(
   //  token
   //  ?
   //  <Navigate to='/dashboard' />
   //  :
    <Outlet/>
  )
}

export default OpenRotes;