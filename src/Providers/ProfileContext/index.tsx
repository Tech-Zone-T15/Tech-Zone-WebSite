import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { IDefaultProviderProps } from "../DashboardContext/@types/dashboardTypes";
import { UserContext } from "../UserContext";
import { iProfileContext, iUpdateProfile } from "./@types/profileTypes";

export const ProfileContext = createContext({} as iProfileContext);

export const ProfileProvider = ({ children }: IDefaultProviderProps) => {

   const token = localStorage.getItem("@TOKEN");
   const navigate = useNavigate();
   const [updateProfileModal, setUpdateProfileModal] = useState(false);
   const [updateProfileImage, setUpdateProfileImage] = useState(false);
   const  user  = JSON.parse(localStorage.getItem('@USER') || '');;

   async function updateProfile(formData: iUpdateProfile) {
      try {
         const response = await api.patch(`/users/${user.id}`, formData, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         localStorage.setItem('@USER', JSON.stringify(response.data))
         toast.success("Perfil atualizado com sucesso!");
         setUpdateProfileModal(false)
         setUpdateProfileImage(false)
      } catch (error) {
         if (axios.isAxiosError(error)) {
            toast.error(error.response?.data);
         }
      }
   }

   async function deleteProfile() {
      try {
         await api.delete(`/users/${user.id}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         toast.success("Perfil deletado");
         localStorage.removeItem("@TOKEN");
         navigate("/");
      } catch (error) {
         if (axios.isAxiosError(error)) {
            toast.error(error.response?.data);
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
            deleteProfile,
         }}
      >
         {children}
      </ProfileContext.Provider>
   );
};
