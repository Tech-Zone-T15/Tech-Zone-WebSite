import { useContext } from "react";
import { ProfileModalImage } from "../../components/ProfileModalImage";
import { ProfileModal } from "../../components/ProfileModal";
import { ProfileContext } from "../../Providers/ProfileContext";
import { StyledMain } from "./style";
import { ProfileData } from "../../components/ProfileData";
import { CapaPerfil } from "../../components/Capa";
import { DynamicHeader } from "../../components/DynamicHeader";

function PerfilPage() {
   const { updateProfileModal, updateProfileImage } = useContext(ProfileContext);
   const user = JSON.parse(localStorage.getItem("@USER") || "");

   return (
      <>
         {updateProfileModal && (
            <ProfileModal
               name={user.name}
               email={user.email}
               city={user.city}
               bio={user.bio}
            />
         )}
         {updateProfileImage && <ProfileModalImage />}
         <DynamicHeader text1="Voltar" text2="Início" location1="/dashboard" location2="/dashboard"/>
         <StyledMain>
            <CapaPerfil />
            <ProfileData />
         </StyledMain>
      </>
   );
}

export default PerfilPage;
