import { useContext, useState } from "react";
import { DashboardContext } from "../../Providers/DashboardContext";
import { IsendPost } from "../../Providers/DashboardContext/@types/dashboardTypes";
import { UserContext } from "../../Providers/UserContext";
import { ModalContainer, Modal, HeaderModal, ModalContent } from "./style";

export const ModalCreatePost = () => {
   const { setModalSendPost, sendPost } = useContext(DashboardContext);
   const { user } = useContext(UserContext);

   const [postContent, setPostContent] = useState("");

   const onSubmit = () => {
      const newPost:IsendPost = {
         content: postContent,
      };
      
      sendPost(newPost)
      setModalSendPost(false)
   };
   return (
      <ModalContainer>
         <Modal>
            <HeaderModal>
               <h2>Criar Publicação</h2>

               <div className="tagsAndBtn">
                  <select name="" id="">
                     <option value="" hidden>
                        Tags
                     </option>
                  </select>
                  <button onClick={() => setModalSendPost(false)}>X</button>
               </div>
            </HeaderModal>

            <ModalContent>
               <div className="div-title">
                  <img src={user?.profile_img} alt="" />
                  <h3>{user?.name}</h3>
               </div>
               <textarea
                  placeholder="Digite seu post..."
                  onChange={(event) => setPostContent(event.target.value)}
               ></textarea>
            </ModalContent>
            <button type="submit" onClick={onSubmit}>
               Enviar
            </button>
         </Modal>
      </ModalContainer>
   );
};
