import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { IComments } from "../../../../Providers/DashboardContext/@types/dashboardTypes";
import { DashboardContext } from "../../../../Providers/DashboardContext";


interface IModalCommentEdit {
   opemModalEdit: true;
   setOpemModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
   comments: IComments
}
interface IdataForm {
   dataForm: string;
   comment: string;
}

export default function ModalCommentEdit({opemModalEdit,setOpemModalEdit,comments}: IModalCommentEdit) {

   const {comment} = comments

   
   const {editcomments} = useContext(DashboardContext)
   
   const {
      register,handleSubmit,formState: { errors },} = useForm<IdataForm>();

   const handleClose = () => {

      setOpemModalEdit(!opemModalEdit);

   };

   const submit = (dataForm: IdataForm) => {

      const data = { ...comments,...dataForm };

      editcomments(data)
      
      setOpemModalEdit(!opemModalEdit);
   };

   return (
      <Dialog open={opemModalEdit} onClose={handleClose}>
         <form onSubmit={handleSubmit(submit)}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
               <DialogContentText>
                  To subscribe to this website, please enter your email address
                  here. We will send updates occasionally.
               </DialogContentText>
            </DialogContent>

            <TextField
               type="textarea"
               id="textarea"
               label="Editar"
               margin="dense"
               multiline
               fullWidth
               defaultValue={comment}
               variant="filled"
               {...register("comment")}
            />

            <DialogActions>
               <Button onClick={handleClose}>Cancel</Button>
               <Button type="submit">Subscribe</Button>
            </DialogActions>
         </form>
      </Dialog>
   );
}
