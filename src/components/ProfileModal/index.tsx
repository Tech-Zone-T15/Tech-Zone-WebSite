import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProfileContext } from "../../Providers/ProfileContext";
import { StyledButton } from "../../styles/button";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ModalBox, ModalProfile } from "./styles";
import TextField from "@mui/material/TextField";
import { UserContext } from "../../Providers/UserContext";

interface iModalPlaceholders {
   name: string | undefined;
   email: string | undefined;
   city: string | undefined;
   bio: string | undefined;
}

export const ProfileModal = ({
   name,
   email,
   city,
   bio,
}: iModalPlaceholders) => {
   const { setUpdateProfileModal, updateProfile } = useContext(ProfileContext);
   const { register, handleSubmit } = useForm();
   const {user} = useContext(UserContext)

   return (
      <ModalBox>
         <ModalProfile>
            <form onSubmit={handleSubmit(updateProfile)}>
               <header>
                  <h1>
                     Editar perfil{" "}
                     <AiOutlineCloseCircle
                        onClick={() => setUpdateProfileModal(false)}
                     />
                  </h1>
               </header>
               <TextField defaultValue={user?.name} {...register("name")} label="Nome"/>
               <TextField defaultValue={user?.email} {...register("email")} label="Email"/>
               <TextField defaultValue={user?.city} {...register("city")} label="Cidade"/>
               <TextField defaultValue={user?.bio} {...register("bio")} label="Bio"/>
               <StyledButton $buttonSize="small" $buttonStyle="blue">
                  Atualizar
               </StyledButton>
            </form>
         </ModalProfile>
      </ModalBox>
   );
};
