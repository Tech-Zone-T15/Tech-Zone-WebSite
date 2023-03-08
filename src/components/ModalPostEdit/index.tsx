import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Ipost } from "../../Providers/DashboardContext/@types/dashboardTypes";
import { useForm } from "react-hook-form";
import { DashboardContext } from "../../Providers/DashboardContext";
import { useContext } from "react";


interface IopemModalEdit {
   opemModalEdit: true;
   setOpemModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
   post: Ipost;
}
interface IdataForm {
   dataForm:string
   content:string
}

export default function FormDialog({opemModalEdit,setOpemModalEdit,post}: IopemModalEdit) {

   const {content} = post

   const {editPost} = useContext(DashboardContext)

   const {
      register,
      handleSubmit,formState: { errors },} = useForm<IdataForm>()

      const handleClose = () => {
      setOpemModalEdit(!opemModalEdit);
   };

   
   const submit =(dataForm:IdataForm) =>{

      const data = {...post, ...dataForm}

      editPost(data)

      setOpemModalEdit(!opemModalEdit);

   }

   return (
         <Dialog open={opemModalEdit} onClose={handleClose}>
            <form onSubmit={handleSubmit(submit)}>
               <DialogTitle>Subscribe</DialogTitle>
               <DialogContent>
                  <DialogContentText>
                     To subscribe to this website, please enter your email address
                     here. We will send updates occasionally.
                  </DialogContentText>
                     <TextField
                        type="textarea"
                        id="textarea"
                        label="Editar"
                        multiline
                        defaultValue={content}
                        variant="filled"
                        {...register("content")}
                     />
               </DialogContent>
               <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit">Subscribe</Button>
               </DialogActions>
            </form>
      </Dialog>
   );
}
