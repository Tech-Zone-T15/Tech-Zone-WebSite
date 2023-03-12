import { useContext } from "react";
import { ProfileContext } from "../../Providers/ProfileContext";
import { BiEditAlt } from "react-icons/Bi";
import { UserContext } from "../../Providers/UserContext";
import { ProfileDataStyle } from "./style";
import { TextField, Typography } from "@mui/material";
import {TiArrowBack} from 'react-icons/ti'

interface iProfileDataProps{
   editing: boolean;
   setEditing: React.Dispatch<React.SetStateAction<boolean>>
}
export const ProfileData = ({editing, setEditing}: iProfileDataProps) => {
   const { setUpdateProfileModal, setDeleteProfileModal } =
      useContext(ProfileContext);
   const { user } = useContext(UserContext);



   return (
      <ProfileDataStyle>
         <div>
            <Typography variant="h6">Cancelar <TiArrowBack onClick={() => setEditing(!editing)}/></Typography>
         </div>
         <div>
            <Typography variant="h4">Informações pessoais </Typography>
            <BiEditAlt
               onClick={() => setUpdateProfileModal(true)}
               size="35px"
            />
         </div>
         <Typography variant="h5">Nome: {user?.name}</Typography>
         <Typography variant="h5">Email: {user?.email}</Typography>
         <Typography variant="h5">Cidade: {user?.city}</Typography>
         <TextField
            fullWidth
            multiline={true}
            minRows={5}
            defaultValue={user?.bio}
            disabled={true}
         />
         
      </ProfileDataStyle>
   );
};
