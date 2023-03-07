import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProfileContext } from "../../Providers/ProfileContext";
import { StyledButton } from "../../styles/button";
import { ModalBox, ModalProfile } from "../ProfileModal/styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const ProfileModalImage = () => {
   const { updateProfile, setUpdateProfileImage } = useContext(ProfileContext);
   const { register, handleSubmit } = useForm();

   return (
      <ModalBox>
         <ModalProfile>
            <form onSubmit={handleSubmit(updateProfile)}>
               <header>
                  <h1>
                     Editar perfil{" "}
                     <AiOutlineCloseCircle
                        onClick={() => setUpdateProfileImage(false)}
                     />
                  </h1>
               </header>
               <label htmlFor="">URL da imagem</label>
               <input type="text" {...register("profile_img")} />
               <StyledButton
                  type="submit"
                  $buttonSize="small"
                  $buttonStyle="blue"
               >
                  Atualizar
               </StyledButton>
            </form>
         </ModalProfile>
      </ModalBox>
   );
};
