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
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IUser } from "../../Providers/UserContext/@types";

export interface ifollowingObj {
   userId: number;
   follows: number;
   id: number;
}
interface iFollowersList {
   userId: number;
   follows: number;
   id: number;
   user: IUser;
}

export interface iMyPost{
   userId: number;
   img: string;
   content: string;
   id: number
}

function PerfilPage() {
   const { updateProfileModal, updateProfileImage, deleteProfileModal } =
      useContext(ProfileContext);
   const { user } = useContext(UserContext);
   const token = localStorage.getItem("@TOKEN");
   const [myPosts, setMyPosts] = useState<iMyPost[]>([])
   const [followingList, setFollowingList] = useState<ifollowingObj[]>([]);
   const [followersList, setFollowersList] = useState<iFollowersList[]>([]);
   const [editing, setEditing] = useState(false);

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
      getMyPosts();

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
      getFollowers();

      async function getUsers() {
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
      getUsers();
   }, [followingList, followersList, myPosts]);



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
            {editing === false ? (
               <div className="open-edit">
                  <Typography variant="h6">
                     Editar Perfil{" "}
                     <IoIosArrowDropdownCircle
                        onClick={() => setEditing(!editing)}
                     />
                  </Typography>
               </div>
            ) : (
               <ProfileData editing={editing} setEditing={setEditing} />
            )}
            <div className="followers-box">
               <Typography variant="h6">Seguidores</Typography>
               <div className="followers-list">
                  {followersList.length > 0 ? (
                     <ul>
                        {followersList.map(follower => (
                           <UserFollowing key={follower.id} userObj={follower.user} followingList={followingList}/>
                        ))}
                     </ul>
                  ): (
                     <li key={crypto.randomUUID()}>
                     <Typography variant="subtitle1">
                        Ninguém te segue
                     </Typography>
                  </li>
                  )}
               </div>
            </div>
            <div className="following-box">
               <Typography variant="h6">Seguindo</Typography>
               <div className="following-list">
                  {followingList.length > 0 ? (
                     <ul>
                        {followingList.map((followObject) => (
                           <UserFollowing
                              key={followObject.id}
                              id={followObject.follows}
                              followId={followObject.id}
                           />
                        ))}
                     </ul>
                  ) : (
                     <li key={crypto.randomUUID()}>
                        <Typography variant="subtitle1">
                           Você não está seguindo ninguém
                        </Typography>
                     </li>
                  )}
               </div>
            </div>
            <MyPostsList myPosts={myPosts}/>
         </StyledMain>
      </>
   );
}

export default PerfilPage;
