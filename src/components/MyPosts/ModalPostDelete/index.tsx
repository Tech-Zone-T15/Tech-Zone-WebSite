import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { DashboardContext } from "../../../Providers/DashboardContext";
import { useContext } from "react";
import { Iposts } from "../../../Providers/DashboardContext/@types/dashboardTypes";
import { ProfileContext } from "../../../Providers/ProfileContext";



interface IopemModal{
   opemModal: true
   setOpemModal: React.Dispatch<React.SetStateAction<boolean>>
   postId: number
}

const Transition = React.forwardRef(function Transition(
   props: TransitionProps & {
      children: React.ReactElement<any, any>;
   },
   ref: React.Ref<unknown>
) {
   return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProfileDeletePostModal({opemModal,setOpemModal,postId}:IopemModal) {

   const {deleteMyPost} = useContext(ProfileContext)

   const handleClose = () => {
      setOpemModal(!opemModal);
   };

   function deleteAndClose(){
      deleteMyPost(postId)
      setOpemModal(!opemModal)
   }
   return (
      <div>
         <Dialog
            open={opemModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
         >
            <DialogContent>
               <DialogContentText id="alert-dialog-slide-description">
                  Deseja mesmo excluir permanentemente essa publicação? 
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose}>Cancelar</Button>
               <Button onClick={() => deleteAndClose()}>Excluir</Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}
