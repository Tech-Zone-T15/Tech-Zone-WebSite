import jwt_decode from "jwt-decode";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/UserContext";
import { DivContainer } from "./style";
import { ModalCreatePost } from "../ModalCreatePost";
import { DashboardContext } from "../../Providers/DashboardContext";

export const SendPost = () => {
   const { user } = useContext(UserContext);
   const {modalSendPost, setModalSendPost} = useContext(DashboardContext)

   
   
   return (
      <>
         <DivContainer>
            <img src={user?.profile_img} alt={user?.name} />
            <button onClick={() => setModalSendPost(true)}>
               Começar a publicar
            </button>
         </DivContainer>

         {modalSendPost && <ModalCreatePost />}
      </>
   );
};
