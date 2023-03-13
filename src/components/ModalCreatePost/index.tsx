import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { DashboardContext } from "../../Providers/DashboardContext";
import { useContext } from "react";
import SendIcon from "@mui/icons-material/Send";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { UserContext } from "../../Providers/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { PostSchema } from "./schema";
import { ErrorMessage } from "@hookform/error-message";
import { CommentSchema } from "../ModalComment/ModalOpemComment/schema";

interface IopemModalEdit {
   modalSendPost: boolean;
   setModalSendPost: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IdataForm {
   userId: number | string;
   img:string
   content:string
}

export default function ModalCreatePost({
   modalSendPost,
   setModalSendPost,
}: IopemModalEdit) {
   const theme = useTheme();
   const mdUp = useMediaQuery(theme.breakpoints.up("sm"));

   const { sendPost } = useContext(DashboardContext);

   const { user } = useContext(UserContext);
      
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<IdataForm>({resolver: yupResolver(PostSchema)});

   const handleClose = () => {
      setModalSendPost(!modalSendPost);
   };

   const submit = (dataForm: IdataForm) => {

      const data = {
         userId: user?.id
      }
      const newData = { ...data, ...dataForm };

      sendPost(newData)

      setModalSendPost(!modalSendPost);
   };

   return (
      <>
         <Dialog open={modalSendPost} onClose={handleClose} sx={{ m:0,p:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <form onSubmit={handleSubmit(submit)}>
               <DialogTitle
                  sx={{
                     borderBottom: 2,
                     borderColor: "#004182",
                     fontSize: "1.5rem",
                  }}
               >
                  Enviar post{" "}
               </DialogTitle>

               <TextField
                  type="text"
                  id="image"
                  label="Envie a Url da imagem"
                  margin="dense"
                  placeholder="https:"
                  sx={{ width: mdUp ? 600 : '100%' }}
                  
                  variant="filled"
                  {...register("img")}
               />

               <TextField
               type="textarea"
               id="content"
               label="Conteudo"
               margin="dense"
               multiline
               sx={{ width:mdUp ? 600 : '100%'}}
               variant="filled"
               {...register("content")}
            />
            <ErrorMessage errors={errors} name="content" as="p" />

               <DialogActions>
                  <Button onClick={handleClose}>Cancelar</Button>
                  <Button
                     type="submit"
                     variant="contained"
                     endIcon={<SendIcon />}
                  >
                     Enviar
                  </Button>
               </DialogActions>
            </form>
         </Dialog>
      </>
   );
}

