import axios from 'axios';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { IDefaultProviderProps } from '../DashboardContext/@types/dashboardTypes';
import { iProfileContext, iUpdateProfile } from './@types/profileTypes';


export const ProfileContext = createContext({} as iProfileContext);

export const ProfileProvider = ({ children }: IDefaultProviderProps ) => {
   const token = localStorage.getItem('@kenziebook:@TOKEN')
   const navigate = useNavigate()
   const [updateProfileModal, setUpdateProfileModal] = useState(false)
   const [updateProfileImage, setUpdateProfileImage] = useState(false)
   const userId = 2
   
  async function updateProfile(formData: iUpdateProfile){
   try {
      const response = await api.patch(`/users/${userId}`,formData, {
         headers: {
            Authorization: `Bearer ${token}`
         }
      })
      toast.success('Perfil atualizado com sucesso!')
   } catch (error) {
      if(axios.isAxiosError(error)){
         toast.error(error.response?.data)
      }
   }
  }

  async function deleteProfile(){
   try {
      const response = await api.delete(`/users/${userId}`,{
         headers:{
            Authorization: `Bearer ${token}`
         }
      })
      toast.success('Perfil deletado')
      localStorage.removeItem('@kenziebook:@TOKEN')
      navigate('/')
   } catch (error) {
      if(axios.isAxiosError(error)){
         toast.error(error.response?.data)
      }
   }
  }

  return ( 
    <ProfileContext.Provider 
      value={{
         updateProfile,
         updateProfileModal,
         setUpdateProfileModal,
         updateProfileImage,
         setUpdateProfileImage,
         deleteProfile
      }}
    >
      {children}
    </ProfileContext.Provider>);
};