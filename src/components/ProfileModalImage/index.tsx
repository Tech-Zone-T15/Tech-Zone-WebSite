import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProfileContext } from "../../Providers/ProfileContext";
import { StyledButton } from "../../styles/button";
import { ModalBox, ModalProfile } from "../ProfileModal/styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import { UserContext } from "../../Providers/UserContext";
import { Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import { ErrorMessage } from "@hookform/error-message";

const schema = yup.object({
   profile_img: yup.string().required('Informe uma url de imagem').matches(
      /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
  )

})

interface iImageForm{
   profile_img: string
}

export const ProfileModalImage = () => {
   const { updateProfile, setUpdateProfileImage } = useContext(ProfileContext);
   const {user} = useContext(UserContext)
   const { register, handleSubmit, formState:{errors} } = useForm<iImageForm>({resolver: yupResolver(schema)});

   return (
      <ModalBox>
         <ModalProfile>
            <form onSubmit={handleSubmit(updateProfile)}>
               <header>
                  <div>
                     <Typography variant="h4">Mudar imagem</Typography>
                     <AiOutlineCloseCircle
                        onClick={() => setUpdateProfileImage(false)}
                        size='35px'
                     />
                  </div>
               </header>
               <TextField defaultValue={user?.profile_img} label="Url da imagem de perfil" {...register("profile_img")} fullWidth multiline={true} maxRows={7}/>
               <ErrorMessage errors={errors} name='profile_img' render={() => <span>Informe uma url válida</span>}/>
               
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
