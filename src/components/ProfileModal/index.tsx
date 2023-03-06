import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProfileContext } from "../../Providers/ProfileContext";
import { StyledButton } from "../../styles/button";

interface iModalPlaceholders{
   name: string;
   email: string;
   city: string;
   bio: string
}

export const ProfileModal = ({name, email, city, bio}: iModalPlaceholders) => {

   const { setUpdateProfileModal, updateProfile } = useContext(ProfileContext);
   const { register, handleSubmit} = useForm()

   return (
      <dialog>
         <form onSubmit={handleSubmit(updateProfile)}>
            <header>
               <h1>Editar perfil</h1>
               <span onClick={() => setUpdateProfileModal(false)}>X</span>
            </header>
            <label htmlFor="">Nome</label>
            <input placeholder={name} type="text" {...register('name')}/>
            <label htmlFor="">Email</label>
            <input placeholder={email} type="text" {...register('email')}/>
            <label htmlFor="">Cidade</label>
            <input placeholder={city} type="text" {...register('city')}/>
            <label htmlFor="">Bio</label>
            <input placeholder={bio} type="text" {...register('bio')}/>
            <StyledButton $buttonSize="small" $buttonStyle="blue">Atualizar</StyledButton>
         </form>
      </dialog>
   );
};
