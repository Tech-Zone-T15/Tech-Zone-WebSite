import { IpostProps} from "../../../Providers/DashboardContext/@types/dashboardTypes";
import commentsIcon  from "../../../assets/icon/commentsIcon.svg"
import editIcon  from "../../../assets/icon/editIcon.svg"
import likeIcon  from "../../../assets/icon/likeIcon.svg"
import trashIcon  from "../../../assets/icon/trashIcon.svg"
import { useState } from "react";
import ModalPostDelete from "../../ModalPostDelete";
import ModalPostEdit from "../../ModalPostEdit"
import { Console } from "console";


export const ListPost = ({post}:IpostProps) => {

   const {img,content} = post
   
   const [opemModal,setOpemModal] = useState(false)
   const [opemModalEdit,setOpemModalEdit] = useState(false)
   
   return (

      <div>

         <div>
            <img src={trashIcon} alt="deletar post" aria-label="Botão para deletar post" onClick={() =>setOpemModal(!opemModal)} />
            <img src={editIcon} alt="editar post" aria-label="Botão para editar post" onClick={() =>setOpemModalEdit(!opemModalEdit)}/>
         </div>

         <div>
            <img src={img} alt="Imagem postada" />
            <p>{content}</p>
         </div>

         <div>
            <img src={likeIcon} alt="curtir post" aria-label="Botão para curtir post"/>
            <img src={commentsIcon} alt="comentario" aria-label="Botão para fazer um comentario" />
         </div>

         {opemModal && <ModalPostDelete opemModal={opemModal} setOpemModal={setOpemModal} post={post}/>}
         { opemModalEdit && <ModalPostEdit opemModalEdit={opemModalEdit} setOpemModalEdit={setOpemModalEdit} post={post}/>}
      </div>
   );
};
