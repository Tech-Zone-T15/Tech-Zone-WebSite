import { useContext } from "react"
import { ProfileImageModal } from "../../components/ProfileImage"
import { ProfileModal } from "../../components/ProfileModal"
import { ProfileContext } from "../../Providers/ProfileContext"
import { StyledMain } from "./style"

function PerfilPage() {
   const { updateProfileModal, updateProfileImage} = useContext(ProfileContext)
  return (
    /* header aqui */
    <StyledMain>
      {
         updateProfileModal && (<ProfileModal />)
      }
      {
         updateProfileImage && (<ProfileImageModal />)
      }
    </StyledMain>
  )
}

export default PerfilPage