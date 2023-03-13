import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { IDefaultProviderProps } from "../DashboardContext/@types/dashboardTypes";
import { UserContext } from "../UserContext";
import { iFollowersList, ifollowingObj, iMyPost, iPost, iProfileContext, iUpdateProfile } from "./@types/profileTypes";


export const ProfileContext = createContext({} as iProfileContext);

export const ProfileProvider = ({ children }: IDefaultProviderProps) => {

   const token = localStorage.getItem("@TOKEN");
   const navigate = useNavigate();
   const [updateProfileModal, setUpdateProfileModal] = useState(false);
   const [updateProfileImage, setUpdateProfileImage] = useState(false);
   const [deleteProfileModal, setDeleteProfileModal] = useState(false)
   const { user, setUser } = useContext(UserContext);
   const [myPosts, setMyPosts] = useState<iMyPost[]>([])
   const [followersList, setFollowersList] = useState<iFollowersList[]>([]);
   const [followingList, setFollowingList] = useState<ifollowingObj[]>([]);


   useEffect(() => {

   }, [followingList, myPosts, followersList])

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

   async function unfollow(id: number) {
      try {
         await api.delete(`/follow/${id}`,{
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         const newList = followingList.filter(obj => obj.id !== id)
         setFollowingList(newList)
      } catch (error) {
         if(axios.isAxiosError(error)){
            toast.error(error.response?.data)
            console.log(`falha ao deletar /follow/${id}`)
         }
      }
   }

   async function getMyPosts() {
      try {
         const response = await api.get(`users/${user?.id}/posts`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         setMyPosts(response.data);
      } catch (error) {
         if (axios.isAxiosError(error)) {
            toast.error(error.response?.data);
         }
      }
   }

   async function getFollowers() {
      try {
         const response = await api.get(`/follow?follows=${user?.id}&_expand=user`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         setFollowersList(response.data);
      } catch (error) {
         if (axios.isAxiosError(error)) {
            toast.error(error.response?.data);
         }
      }
   }

   async function getUsersProfile() {
      try {
         const response = await api.get(`/users/${user?.id}/follow`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         setFollowingList(response.data);
      } catch (error) {
         if (axios.isAxiosError(error)) {
            toast.error(error.response?.data);
         }
      }
   }

   async function editMyPost(formData: iMyPost, postId: number) {
      try {
         const response = await api.patch(`/posts/${postId}`, formData, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         const newList = myPosts.filter(post => post.id !== postId)
         setMyPosts([...newList, response.data])
      } catch (error) {
         if(axios.isAxiosError(error)){
            toast.error(error.response?.data)
         }
      }
   }
   
   async function deleteMyPost(postId: number) {
      try {
         await api.delete(`/posts/${postId}`,{
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         const newList = myPosts.filter(post => post.id !== postId)
         setMyPosts(newList)
         toast.success('Publicação excluída')
      } catch (error) {
         if(axios.isAxiosError(error)){
            toast.error(error.response?.data)
         }
      }
   }

   async function follow(userIdToFollow: number) {
      try {
         const response = await api.post(`/follow`,{userId: user?.id, follows: userIdToFollow}, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         setFollowingList([...followingList, response.data])
      } catch (error) {
         if(axios.isAxiosError(error)){
            toast.error(error.response?.data)
         }
      }
   }

   async function publishAPost(dataForm: iPost) {
      try {
         const response = await api.post('/posts', dataForm, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         setMyPosts([...myPosts, response.data])
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
            unfollow,
            getMyPosts,
            myPosts,
            getFollowers,
            followersList,
            getUsersProfile,
            followingList,
            editMyPost,
            deleteMyPost,
            follow,
            publishAPost
         }}
      >
         {children}
      </ProfileContext.Provider>
   );
};
