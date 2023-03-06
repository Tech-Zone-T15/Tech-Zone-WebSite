import { useContext } from "react";
import { ProfileContext } from "../../Providers/ProfileContext";

interface iProfileData{
   name: string;
   email: string;
   city: string;
   bio: string
}
export const ProfileData = ({name, email, city, bio}: iProfileData) => {

const {deleteProfile} = useContext(ProfileContext)

   return(
      <div>
         <h1>Dados pessoais</h1>
         <h2>Nome: {name}</h2>
         <h2>Email: {email}</h2>
         <h2>Cidade: {city}</h2>
         {/* bio aqui */}
         <button onClick={() => deleteProfile()}>Deletar perfil</button>
      </div>
   )
}