import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { IDefaultProviderProps } from "../DashboardContext/@types/dashboardTypes";
import { UserContext } from "../UserContext";
import { iMyPost, iProfileContext, iUpdateProfile } from "./@types/profileTypes";


export const ProfileContext = createContext({} as iProfileContext);

export const ProfileProvider = ({ children }: IDefaultProviderProps) => {

   const token = localStorage.getItem("@TOKEN");
   const navigate = useNavigate();
   const [updateProfileModal, setUpdateProfileModal] = useState(false);
   const [updateProfileImage, setUpdateProfileImage] = useState(false);
   const [deleteProfileModal, setDeleteProfileModal] = useState(false)
   const { user, setUser } = useContext(UserContext);
   const [myPosts, setMyPosts] = useState<iMyPost[]>([])

   async function updateProfile(formData: iUpdateProfile) {
      try {
         const response = await api.patch(`/users/${user?.id}`, formData, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         setUser(response.data);
         setUpdateProfileModal(false);
         setUpdateProfileImage(false);
         toast.success("Perfil atualizado com sucesso!");
      } catch (error) {
         if (axios.isAxiosError(error)) {
            toast.error(error.response?.data);
         }
      }
   }

   async function deleteProfile() {
      try {
         await api.delete(`/users/${user?.id}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         api.delete(`/users/${user?.id}?_embed=posts&_embed=likes&_embed=comments`,{
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         setDeleteProfileModal(false)
         setUpdateProfileModal(false)
         toast.success("Perfil deletado");
         localStorage.removeItem("@TOKEN");
         navigate("/");
      } catch (error) {
         if (axios.isAxiosError(error)) {
            toast.error(error.response?.data);
         }
      }
   }

   async function unfollow(id: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      try {
         await api.delete(`/follow/${id}`,{
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         event.target.parentElement.parentElement.parentElement.remove()
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
            deleteProfile,
            deleteProfileModal,
            setDeleteProfileModal,
            myPosts,
            setMyPosts,
            unfollow
         }}
      >
         {children}
      </ProfileContext.Provider>
   );
};
