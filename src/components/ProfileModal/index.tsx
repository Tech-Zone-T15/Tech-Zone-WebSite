import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProfileContext } from "../../Providers/ProfileContext";

export const ProfileModal = () => {
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
            <input type="text" {...register('name')}/>
            <label htmlFor="">Email</label>
            <input type="text" {...register('email')}/>
            <label htmlFor="">Cidade</label>
            <input type="text" {...register('city')}/>
            <label htmlFor="">Bio</label>
            <input type="text" {...register('bio')}/>
            <button type="submit">Atualizar</button>
         </form>
      </dialog>
   );
};
