import { useContext, useState} from "react";
import { UserContext } from "../../../Providers/UserContext";
import { DivContainer } from "./style";
import ProfileModalCreatePost from "../ModalCreatePost";

export const ProfileSendPost = () => {
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
            {modalSendPost && <ProfileModalCreatePost modalSendPost={modalSendPost} setModalSendPost={setModalSendPost} />}
      </>
   );
};
