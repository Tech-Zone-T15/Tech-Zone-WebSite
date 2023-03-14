import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../../Providers/UserContext';

const OpenRotes = () => {

  const token = localStorage.getItem('@TOKEN')

  const { load } = useContext(UserContext);

  return(
   <>
   {load
   ?
   <h1>Carregando..</h1>
   :
   <Outlet/>
   }
   </>
  )
}

export default OpenRotes;