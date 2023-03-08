import { useContext } from "react";
import { ProfileContext } from "../../Providers/ProfileContext";
import { BiEditAlt } from "react-icons/Bi";
import { UserContext } from "../../Providers/UserContext";


export const ProfileData = () => {
   const { setUpdateProfileModal, setDeleteProfileModal } = useContext(ProfileContext);
   const {user} = useContext(UserContext) 


   return (
      <div>
         <h1>
            Dados pessoais{" "}
            <BiEditAlt onClick={() => setUpdateProfileModal(true)} />
         </h1>
         <h2>Nome: {user?.name}</h2>
         <h2>Email: {user?.email}</h2>
         <h2>Cidade: {user?.city}</h2>
         {/* bio aqui */}
         <button onClick={() => setDeleteProfileModal(true)}>Deletar perfil</button>
      </div>
   );
};
