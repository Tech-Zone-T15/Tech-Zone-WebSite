import { CapaStyle } from "./style";

export const CapaPerfil = () => {
   const user = JSON.parse(localStorage.getItem("@USER") || "");

   return (
      <CapaStyle>
         <img className="foto-capa"
            src="https://s3.amazonaws.com/gupy5/production/companies/7825/career/18358/images/2021-08-24_14-01_mainImage.png"
            alt="capa"
         />
         <img className="foto-perfil" src={user.profile_img} alt={user.name} />
      </CapaStyle>
   );
};
