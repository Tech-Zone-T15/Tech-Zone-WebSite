import { IpostProps} from "../../../Providers/DashboardContext/@types/dashboardTypes";
import commentsIcon  from "../../../assets/icon/commentsIcon.svg"
import editIcon  from "../../../assets/icon/editIcon.svg"
import likeIcon  from "../../../assets/icon/likeIcon.svg"
import trashIcon  from "../../../assets/icon/trashIcon.svg"
import { useContext,useState } from "react";
import { DashboardContext } from "../../../Providers/DashboardContext";
import ModalPost from "../../ModalPost";



export const ListPost = ({post}:IpostProps) => {
   const {img,content} = post

   const {deletePost} = useContext(DashboardContext)

   const [opemModal,setOpemModal] = useState(false)

   return (

      <div>

         <div>
            <div>
               <img src={img} alt="Foto do usuario" />
               <h2>Usuario</h2>
            </div>

            <div>
               <img src={trashIcon} alt="deletar post" aria-label="Botão para deletar post" onClick={() =>setOpemModal(!opemModal)} />
               <img src={editIcon} alt="editar post" aria-label="Botão para editar post" />
            </div>
         </div>

         <div>
            <p>{content}</p>
         </div>

         <div>
            <img src={likeIcon} alt="curtir post" aria-label="Botão para curtir post"/>
            <img src={commentsIcon} alt="comentario" aria-label="Botão para fazer um comentario" />
         </div>

         {opemModal && <ModalPost opemModal={opemModal}/>}
      </div>
   );
};
