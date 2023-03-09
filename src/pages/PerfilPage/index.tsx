import { useContext, useEffect } from "react";
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


function PerfilPage() {
   const { updateProfileModal, updateProfileImage, deleteProfileModal } = useContext(ProfileContext);
   const { setMyPosts, myPosts} = useContext(ProfileContext)
   const {user} = useContext(UserContext)
   const token = localStorage.getItem("@TOKEN")

   useEffect(() => {
      async function getMyPosts(){
         try {
            const response = await api.get(`users/${user?.id}/posts`,{
               headers: {
                  Authorization: `Bearer ${token}`
               }
            })
            setMyPosts(response.data)
         } catch (error) {
            if(axios.isAxiosError(error)){
               toast.error(error.response?.data)
            }
         }
      }
      getMyPosts()
   },[myPosts])
   
   return (
      <>
         {updateProfileModal && (
            <ProfileModal/>
         )}
         {updateProfileImage && <ProfileModalImage />}
         {deleteProfileModal && <ModalConfirm />}
         <DynamicHeader text1="Voltar" text2="Início" location1="/dashboard" location2="/dashboard"/>
         <StyledMain>
            <CapaPerfil />
            <ProfileData />
            <MyPostsList/>
         </StyledMain>
      </>
   );
}

export default PerfilPage;
