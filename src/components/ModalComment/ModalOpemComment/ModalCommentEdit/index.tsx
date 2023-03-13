import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { IComments } from "../../../../Providers/DashboardContext/@types/dashboardTypes";
import { DashboardContext } from "../../../../Providers/DashboardContext";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SendIcon from '@mui/icons-material/Send'


interface IModalCommentEdit {
   opemModalEdit: true;
   setOpemModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
   comments: IComments
}
interface IdataForm {
   id?: React.Key | null | undefined;
   map?: any;
   postId: number;
   userId: number;
   name?: string;
   profile_img?: string;
   comment:string;
}

export default function ModalCommentEdit({opemModalEdit,setOpemModalEdit,comments}: IModalCommentEdit) {

   const {comment} = comments

   const theme = useTheme();
   const mdUp = useMediaQuery(theme.breakpoints.up('sm'));

   
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
      <Dialog open={opemModalEdit} onClose={handleClose} sx={{ margin:0, }}>
         <form onSubmit={handleSubmit(submit)}>
            <DialogTitle sx={{ borderBottom: 2,borderColor: '#004182',fontSize:"1.5rem" }}>Editar Comentario</DialogTitle>

            <TextField
               type="textarea"
               id="textarea"
               label="Editar"
               margin="dense"
               multiline
               fullWidth
               defaultValue={comment}
               sx={{ width:mdUp ? 600 : 300}}
               variant="filled"
               {...register("comment")}
            />

            <DialogActions>
               <Button onClick={handleClose}>Cancelar</Button>
               <Button type="submit" variant="contained" endIcon={<SendIcon />}>Enviar</Button>
            </DialogActions>
         </form>
      </Dialog>
   );
}
