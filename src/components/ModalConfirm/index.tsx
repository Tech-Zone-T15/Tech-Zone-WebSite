import { useContext } from "react";
import { ProfileContext } from "../../Providers/ProfileContext";
import { StyledButton } from "../../styles/button";
import { ModalBox, ModalProfile } from "../ProfileModal/styles";
import { Typography } from "@mui/material";

export const ModalConfirm = () => {
   const { deleteProfile, setDeleteProfileModal } = useContext(ProfileContext);
   return (
      <ModalBox>
         <ModalProfile>
            <Typography variant="h5">Tem certeza que deseja excluir sua conta permanentemente?</Typography>
            <div>
               <StyledButton
                  $buttonSize="medium"
                  $buttonStyle="red"
                  onClick={() => deleteProfile()}
               >
                  Sim, quero excluir
               </StyledButton>
               <StyledButton
                  $buttonSize="medium"
                  $buttonStyle="blue"
                  onClick={() => setDeleteProfileModal(false)}
               >
                  Cancelar
               </StyledButton>
            </div>
         </ModalProfile>
      </ModalBox>
   );
};
