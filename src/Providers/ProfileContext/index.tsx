import axios from 'axios';
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { IDefaultProviderProps } from '../DashboardContext/@types/dashboardTypes';
import { iProfileContext, iUpdateProfile } from './@types/profileTypes';


export const ProfileContext = createContext({} as iProfileContext);

export const ProfileProvider = ({ children }: IDefaultProviderProps ) => {
   const token = localStorage.getItem('@kenziebook:@TOKEN')
   const [updateProfileModal, setUpdateProfileModal] = useState(true)
   const [updateProfileImage, setUpdateProfileImage] = useState(true)
   const userId = 2
   
  async function updateProfile(formData: iUpdateProfile){
   try {
      const response = await api.patch(`/users/${userId}`,formData, {
         headers: {
            Authorization: `Bearer ${token}`
         }
      })
   } catch (error) {
      if(axios.isAxiosError(error)){
         toast.error(error.code)
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
         setUpdateProfileImage
      }}
    >
      {children}
    </ProfileContext.Provider>);
};