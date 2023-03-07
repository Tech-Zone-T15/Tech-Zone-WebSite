import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { DashboardContext } from "../../Providers/DashboardContext";
import { useContext } from "react";
import { Ipost } from "../../Providers/DashboardContext/@types/dashboardTypes";



interface IopemModal{
   opemModal: true
   setOpemModal: React.Dispatch<React.SetStateAction<boolean>>
   post: Ipost
}

const Transition = React.forwardRef(function Transition(
   props: TransitionProps & {
      children: React.ReactElement<any, any>;
   },
   ref: React.Ref<unknown>
) {
   return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({opemModal,setOpemModal,post}:IopemModal) {

   const {deletePost} = useContext(DashboardContext)

   const handleClose = () => {
      setOpemModal(!opemModal);
   };

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
                  Deseja mesmo deletar esse post ? 
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose}>Disagree</Button>
               <Button onClick={() => deletePost(post)}>Agree</Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}
