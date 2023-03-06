import { useContext } from "react"
import { ProfileModalImage } from "../../components/ProfileModalImage"
import { ProfileModal } from "../../components/ProfileModal"
import { ProfileContext } from "../../Providers/ProfileContext"
import { StyledMain } from "./style"
import { ProfileData } from "../../components/ProfileData"

function PerfilPage() {
   const { updateProfileModal, updateProfileImage} = useContext(ProfileContext)
  return (
    /* header aqui */
    <StyledMain>
      <ProfileData name={'teste'} email={'teste@mail.com'} city={'cidade'} bio={'bio aqui'}/>
      {
         updateProfileModal && (<ProfileModal name={'teste'} email={'teste@mail.com'} city={'cidade'} bio={'bio aqui'}/>)
      }
      {
         updateProfileImage && (<ProfileModalImage />)
      }
    </StyledMain>
  )
}

export default PerfilPage