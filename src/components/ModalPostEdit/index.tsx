import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Ipost } from "../../Providers/DashboardContext/@types/dashboardTypes";


interface IopemModalEdit {
   opemModalEdit: true;
   setOpemModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
   post: Ipost;
}

export default function FormDialog({opemModalEdit,setOpemModalEdit,post}: IopemModalEdit) {
   

   const handleClose = () => {
      setOpemModalEdit(!opemModalEdit);
   };


   return (
      <div>
         <Dialog open={opemModalEdit} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
               <DialogContentText>
                  To subscribe to this website, please enter your email address
                  here. We will send updates occasionally.
               </DialogContentText>
                  <TextField
                     id="filled-textarea"
                     label="Editar"
                     multiline
                     variant="filled"
                  />
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose}>Cancel</Button>
               <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
         </Dialog>
         <input />
      </div>
   );
}
