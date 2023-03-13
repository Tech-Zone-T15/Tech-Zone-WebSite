import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Iposts } from "../../Providers/DashboardContext/@types/dashboardTypes";
import { useForm } from "react-hook-form";
import { DashboardContext } from "../../Providers/DashboardContext";
import { useContext } from "react";
import SendIcon from '@mui/icons-material/Send'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



interface IopemModalEdit {
   opemModalEdit: true;
   setOpemModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
   post: Iposts;
}
interface IdataForm {
   dataForm: string;
   content: string;
}

export default function FormDialog({
   opemModalEdit,
   setOpemModalEdit,
   post,
}: IopemModalEdit) {

   const theme = useTheme();
   const mdUp = useMediaQuery(theme.breakpoints.up('sm'));

   const { content } = post;

   const { editPost } = useContext(DashboardContext);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<IdataForm>();

   const handleClose = () => {
      setOpemModalEdit(!opemModalEdit);
   };

   const submit = (dataForm: IdataForm) => {
      const data = { ...post, ...dataForm };

      
      editPost(data);

      setOpemModalEdit(!opemModalEdit);
   };

   return (
      <Dialog open={opemModalEdit} onClose={handleClose} sx={{ margin:0, }} >
         <form onSubmit={handleSubmit(submit)}>
            <DialogTitle sx={{ borderBottom: 2,borderColor: '#004182',fontSize:"1.5rem" }}>Editar post </DialogTitle>

            <TextField
               type="textarea"
               id="textarea"
               label="Editar"
               margin="dense"
               multiline
               sx={{ width:mdUp ? 600 : 300}}
               defaultValue={content}
               variant="filled"
               {...register("content")}
            />

            <DialogActions>
               <Button onClick={handleClose}>Cancelar</Button>
               <Button type="submit" variant="contained" endIcon={<SendIcon />}>Enviar</Button>
            </DialogActions>
         </form>
      </Dialog>
   );
}
