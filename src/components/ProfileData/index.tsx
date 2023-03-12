import { useContext } from "react";
import { ProfileContext } from "../../Providers/ProfileContext";
import { UserContext } from "../../Providers/UserContext";
import { ProfileDataStyle } from "./style";
import { TextField, Typography } from "@mui/material";
import {TiArrowBack} from 'react-icons/ti'
import {CiEdit} from 'react-icons/ci'

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
            <Typography id='cancel-edit' onClick={() => setEditing(!editing)} variant="h6">Cancelar<TiArrowBack/></Typography>
         </div>
         <div>
            <Typography variant="h4">Informações pessoais </Typography>
            <CiEdit
               id='open-edit-modal-icon'
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
