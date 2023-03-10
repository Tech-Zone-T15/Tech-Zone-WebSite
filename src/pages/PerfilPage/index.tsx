import { useContext, useEffect, useState } from "react";
import { ProfileModalImage } from "../../components/ProfileModalImage";
import { ProfileModal } from "../../components/ProfileModal";
import { ProfileContext } from "../../Providers/ProfileContext";
import { StyledMain } from "./style";
import { ProfileData } from "../../components/ProfileData";
import { CapaPerfil } from "../../components/Capa";
import { DynamicHeader } from "../../components/DynamicHeader";
import { ModalConfirm } from "../../components/ModalConfirm";
import { api } from "../../services/api";
import { UserContext } from "../../Providers/UserContext";
import axios from "axios";
import { toast } from "react-toastify";
import { MyPostsList } from "../../components/MyPosts";
import { UserFollowing } from "../../components/UserFollowing";
import { Typography } from "@mui/material";

interface ifollowObject{
   userId: number;
   follows: number;
   id: number;
}

function PerfilPage() {
   const { updateProfileModal, updateProfileImage, deleteProfileModal } =
      useContext(ProfileContext);
   const { setMyPosts, myPosts } = useContext(ProfileContext);
   const [followingList, setFollowingList] = useState([]);
   const { user } = useContext(UserContext);
   const token = localStorage.getItem("@TOKEN");

   useEffect(() => {
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
      async function getUsers() {
         try {
            const response = await api.get(`/users/${user?.id}/follow`, {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });
            setFollowingList(response.data);
            console.log(response.data)
         } catch (error) {
            if (axios.isAxiosError(error)) {
               toast.error(error.response?.data);
            }
         }
      }
      getMyPosts();
      getUsers();
   }, []);

   return (
      <>
         {updateProfileModal && <ProfileModal />}
         {updateProfileImage && <ProfileModalImage />}
         {deleteProfileModal && <ModalConfirm />}
         <DynamicHeader
            text1="Voltar"
            text2="Início"
            location1="/dashboard"
            location2="/dashboard"
         />
         <StyledMain>
            <CapaPerfil />
            <ProfileData />
            <div>
               <Typography variant="h6">Seguindo</Typography>
               <div className="seguindo">
                  {followingList.length > 0 ? (
                     <ul>
                        {followingList.map((followObject: ifollowObject) => (
                           <UserFollowing
                              id={followObject.follows}
                              followId={followObject.id}
                           />
                        ))}
                     </ul>
                  ) : (
                     <li key={crypto.randomUUID()}>
                        <Typography variant="subtitle1">Você não está seguindo ninguém</Typography>
                     </li>
                  )}
               </div>
            </div>
            <MyPostsList />
         </StyledMain>
      </>
   );
}

export default PerfilPage;
