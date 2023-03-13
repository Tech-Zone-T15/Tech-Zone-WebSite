import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Iposts } from "../../../Providers/DashboardContext/@types/dashboardTypes";
import { useForm } from "react-hook-form";
import { DashboardContext } from "../../../Providers/DashboardContext";
import { useContext } from "react";
import { iMyPost } from "../../../Providers/ProfileContext/@types/profileTypes";
import { ProfileContext } from "../../../Providers/ProfileContext";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

interface IopemModalEdit {
   opemModalEdit: true;
   setOpemModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
   post: iMyPost;
}
interface IdataForm {
   dataForm: string;
   content: string;
}

const schema = yup.object({
   img: yup.string().required('Informe uma url de imagem').matches(
      /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
  )

})

export default function ProfileModalEditPost({opemModalEdit,setOpemModalEdit,post,}: IopemModalEdit) {


   const { editMyPost } = useContext(ProfileContext);

   const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(schema)});

   const handleClose = () => {
      setOpemModalEdit(!opemModalEdit);
   };

   function submit(dataForm: IdataForm){
      const data = { ...post, ...dataForm };
      
      editMyPost(data, post.id)

      setOpemModalEdit(!opemModalEdit);
   }

   
   return (
      <Dialog open={opemModalEdit} onClose={handleClose}>
         <form onSubmit={handleSubmit(submit)}>
            <DialogTitle>Editar publicação</DialogTitle>
            <TextField
               type="textarea"
               id="textarea edit-post-img-input"
               label="Link da imagem da foto"
               margin="dense"
               multiline
               fullWidth
               defaultValue={post.img}
               variant="filled"
               maxRows={5}
               {...register("img")}
            />

            <TextField
               type="textarea"
               id="textarea"
               label="Conteúdo da publicação"
               margin="dense"
               multiline
               fullWidth
               defaultValue={post.content}
               variant="filled"
               maxRows={5}
               {...register("content")}
            />

            <DialogActions>
               <Button onClick={handleClose}>Cancelar</Button>
               <Button type="submit">Salvar</Button>
            </DialogActions>
         </form>
      </Dialog>
   );
}
