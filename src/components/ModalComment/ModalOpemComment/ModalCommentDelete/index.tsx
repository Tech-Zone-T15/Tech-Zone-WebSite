import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useContext } from "react";
import { DashboardContext } from "../../../../Providers/DashboardContext";
import { IComments } from "../../../../Providers/DashboardContext/@types/dashboardTypes";



interface IopemModal{
   opemModalDelete: true
   setOpemModalDelete: React.Dispatch<React.SetStateAction<boolean>>
   comments:IComments
}

const Transition = React.forwardRef(function Transition(
   props: TransitionProps & {
      children: React.ReactElement<any, any>;
   },
   ref: React.Ref<unknown>
) {
   return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalCommentDelete({opemModalDelete,setOpemModalDelete,comments}:IopemModal) {

   const {deleteComments} = useContext(DashboardContext)

   const handleClose = () => {
      setOpemModalDelete(!opemModalDelete);
   };

   return (
      <div>
         <Dialog
            open={opemModalDelete}
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
               <Button onClick={() => deleteComments(comments)}>Agree</Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}
