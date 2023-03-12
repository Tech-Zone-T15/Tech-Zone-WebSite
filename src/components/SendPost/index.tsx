import { useContext, useState} from "react";
import { UserContext } from "../../Providers/UserContext";
import { DivContainer } from "./style";
import { DashboardContext } from "../../Providers/DashboardContext";
import ModalCreatePost from "../ModalCreatePost";

export const SendPost = () => {
   const { user } = useContext(UserContext);

   const [modalSendPost, setModalSendPost] = useState(false);
   
   return (
      <>
         <DivContainer>
            <img src={user?.profile_img} alt={user?.name} />
            <button type="button" onClick={() => setModalSendPost(!modalSendPost)}>
               <p>Começar a publicar</p>
            </button>
         </DivContainer>
            {modalSendPost && <ModalCreatePost modalSendPost={modalSendPost} setModalSendPost={setModalSendPost} />}
      </>
   );
};
