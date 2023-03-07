import { CapaStyle } from "./style";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { useContext } from "react";
import { ProfileContext } from "../../Providers/ProfileContext";

export const CapaPerfil = () => {
   const user = JSON.parse(localStorage.getItem("@USER") || "");
   const { setUpdateProfileImage } = useContext(ProfileContext);

   return (
      <CapaStyle>
         <img
            className="foto-capa"
            src="https://s3.amazonaws.com/gupy5/production/companies/7825/career/18358/images/2021-08-24_14-01_mainImage.png"
            alt="capa"
         />
         <div className="image-box">
            <img
               className="foto-perfil"
               src={user.profile_img}
               alt={user.name}
            />
            <button onClick={() => setUpdateProfileImage(true)}><MdOutlineAddAPhoto /></button>
         </div>
      </CapaStyle>
   );
};
