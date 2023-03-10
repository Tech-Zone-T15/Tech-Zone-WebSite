import { useContext, useEffect, useState } from "react";
import { ProfileModalImage } from "../../components/ProfileModalImage";
import { ProfileModal } from "../../components/ProfileModal";
import { ProfileContext } from "../../Providers/ProfileContext";
import { StyledMain } from "./style";
import { ProfileData } from "../../components/ProfileData";
import { CapaPerfil } from "../../components/Capa";
import { DynamicHeader } from "../../components/DynamicHeader";
import { ModalConfirm } from "../../components/ModalConfirm";
import { MyPostsList } from "../../components/MyPosts";
import { UserFollowing } from "../../components/UserFollowing";
import { Typography } from "@mui/material";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IUser } from "../../Providers/UserContext/@types";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../Providers/UserContext";
import { FaUserEdit } from "react-icons/fa";

function PerfilPage() {
   const { updateProfileModal, updateProfileImage, deleteProfileModal } =
      useContext(ProfileContext);
   const [editing, setEditing] = useState(false);
   const {
      getMyPosts,
      getFollowers,
      getUsersProfile,
      myPosts,
      followersList,
      followingList,
   } = useContext(ProfileContext);

   const location = useLocation()
   localStorage.setItem('@location', location.pathname)

   useEffect(() => {
      getMyPosts();
      getFollowers();
      getUsersProfile();
   }, []);

   return (
      <>
         {updateProfileModal && <ProfileModal />}
         {updateProfileImage && <ProfileModalImage />}
         {deleteProfileModal && <ModalConfirm />}
         <DynamicHeader
            text1="Voltar"
            text2="LogOut"
            location1="/dashboard"
            location2="/out"
         />
         <StyledMain>
            <CapaPerfil />
            {editing === false ? (
               <div className="open-edit">
                  <Typography
                     onClick={() => setEditing(!editing)}
                     id="edit"
                     variant="h6"
                  >
                     Editar Perfil <FaUserEdit />
                  </Typography>
               </div>
            ) : (
               <ProfileData editing={editing} setEditing={setEditing} />
            )}
            <div className="main-container">
               <div className="connections-container">
                  <div className="followers-box">
                     <Typography variant="h6">
                        Seguidores ({followersList.length})
                     </Typography>
                     <div className="followers-list">
                        {followersList.length > 0 ? (
                           <ul>
                              {followersList.map((follower) => (
                                 <UserFollowing
                                    key={follower.id}
                                    userObj={follower.user} followId={0}                                 />
                              ))}
                           </ul>
                        ) : (
                           <li key={crypto.randomUUID()}>
                              <Typography variant="subtitle1">
                                 Ningu??m te segue
                              </Typography>
                           </li>
                        )}
                     </div>
                  </div>
                  <div className="following-box">
                     <Typography variant="h6">
                        Seguindo ({followingList.length})
                     </Typography>
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
                                 Voc?? n??o est?? seguindo ningu??m
                              </Typography>
                           </li>
                        )}
                     </div>
                  </div>
               </div>
               <MyPostsList myPosts={myPosts} />
            </div>
         </StyledMain>
      </>
   );
}

export default PerfilPage;
