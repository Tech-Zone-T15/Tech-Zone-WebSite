import { useContext } from "react";
import { ProfileModalImage } from "../../components/ProfileModalImage";
import { ProfileModal } from "../../components/ProfileModal";
import { ProfileContext } from "../../Providers/ProfileContext";
import { StyledMain } from "./style";
import { ProfileData } from "../../components/ProfileData";
import { CapaPerfil } from "../../components/Capa";
import { DynamicHeader } from "../../components/DynamicHeader";
import { UserContext } from "../../Providers/UserContext";
import { ModalConfirm } from "../../components/ModalConfirm";

function PerfilPage() {
   const { updateProfileModal, updateProfileImage, deleteProfileModal } = useContext(ProfileContext);
   const {user} = useContext(UserContext)

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
         </StyledMain>
      </>
   );
}

export default PerfilPage;
