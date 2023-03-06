import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProfileContext } from "../../Providers/ProfileContext";
import { StyledButton } from "../../styles/button";

export const ProfileModalImage = () => {
   const { updateProfile, setUpdateProfileImage } = useContext(ProfileContext);
   const { register, handleSubmit} = useForm()

   return (
      <dialog>
         <form onSubmit={handleSubmit(updateProfile)}>
            <header>
               <h1>Editar perfil</h1>
               <span onClick={() => setUpdateProfileImage(false)}>X</span>
            </header>
            <label htmlFor="">URL da imagem</label>
            <input type="text" {...register('profile_img')}/>
            <StyledButton type="submit" $buttonSize="small" $buttonStyle="blue" >Atualizar</StyledButton>
         </form>
      </dialog>
   );
};
