import { useContext } from "react";
import { ProfileContext } from "../../Providers/ProfileContext";
import { StyledButton } from "../../styles/button";
import { ModalBox, ModalProfile } from "../ProfileModal/styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const ModalConfirm = () => {
   const { deleteProfile, setDeleteProfileModal } = useContext(ProfileContext);
   return (
      <ModalBox>
         <ModalProfile>
            <h1>Tem certeza que deseja excluir permanentemente seu perfil?</h1>
            <div>
               <StyledButton
                  $buttonSize="small"
                  $buttonStyle="red"
                  onClick={() => deleteProfile()}
               >
                  Excluir
               </StyledButton>
               <StyledButton
                  $buttonSize="small"
                  $buttonStyle="blue"
                  onClick={() => setDeleteProfileModal(false)}
               >
                  Voltar
               </StyledButton>
            </div>
         </ModalProfile>
      </ModalBox>
   );
};
