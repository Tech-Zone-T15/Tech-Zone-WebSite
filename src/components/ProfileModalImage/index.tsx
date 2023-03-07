import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProfileContext } from "../../Providers/ProfileContext";
import { StyledButton } from "../../styles/button";
import { ModalBox, ModalProfile } from "../ProfileModal/styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import { UserContext } from "../../Providers/UserContext";

export const ProfileModalImage = () => {
   const { updateProfile, setUpdateProfileImage } = useContext(ProfileContext);
   const {user} = useContext(UserContext)
   const { register, handleSubmit } = useForm();

   return (
      <ModalBox>
         <ModalProfile>
            <form onSubmit={handleSubmit(updateProfile)}>
               <header>
                  <div>
                     <h1>Editar perfil </h1>
                     <AiOutlineCloseCircle
                        onClick={() => setUpdateProfileImage(false)}
                     />
                  </div>
               </header>
               <TextField defaultValue={user?.profile_img} label="Url da imagem de perfil" {...register("profile_img")}/>
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
