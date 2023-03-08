import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProfileContext } from "../../Providers/ProfileContext";
import { StyledButton } from "../../styles/button";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ModalBox, ModalProfile } from "./styles";
import TextField from "@mui/material/TextField";
import { UserContext } from "../../Providers/UserContext";
import { Typography } from "@mui/material";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

const schema = yup.object({
   name: yup.string().required('Informe seu nome').min(2, 'Mínimo 2 caracteres'),
   email: yup.string().required('Informe seu email').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
   city: yup.string().required('Informe sua cidade').min(4, 'Mínimo 1 caracter'),
   bio: yup.string().required('Fale sobre você').min(20,'Mínimo 20 caracteres')
})

interface iFormData{
   name: string;
   email: string;
   city: string;
   bio: string
}
export const ProfileModal = () => {
   const { setUpdateProfileModal, updateProfile } = useContext(ProfileContext);
   const { register, handleSubmit, formState: {errors} } = useForm<iFormData>({resolver: yupResolver(schema)});
   const { user } = useContext(UserContext);

   return (
      <ModalBox>
         <ModalProfile>
            <form onSubmit={handleSubmit(updateProfile)}>
               <header>
                  <div>
                     <Typography variant="h5">Editar Perfil</Typography>
                     <AiOutlineCloseCircle
                        onClick={() => setUpdateProfileModal(false)}
                        size='35px'
                     />
                  </div>
               </header>
               <TextField
                  defaultValue={user?.name}
                  {...register("name")}
                  label="Nome"
                  fullWidth
               />
               <ErrorMessage errors={errors} name='name' render={() => <span>Mínimo 2 caracteres</span>}/>
               <TextField
                  defaultValue={user?.email}
                  {...register("email")}
                  label="Email"
                  fullWidth
               />
               <ErrorMessage errors={errors} name='email' render={() => <span>Email inválido</span>}/>
               <TextField
                  defaultValue={user?.city}
                  {...register("city")}
                  label="Cidade"
                  fullWidth
               />
               <ErrorMessage errors={errors} name='city' render={() => <span>Mínimo 4 caracteres</span>}/>
               <TextField
                  multiline={true}
                  minRows={5}
                  fullWidth
                  defaultValue={user?.bio}
                  {...register("bio")}
                  label="Bio"
               />
               <ErrorMessage errors={errors} name='bio' render={() => <span>Mínimo 20 caracteres</span>}/>
               <StyledButton $buttonSize="small" $buttonStyle="blue">
                  Atualizar
               </StyledButton>
            </form>
         </ModalProfile>
      </ModalBox>
   );
};
