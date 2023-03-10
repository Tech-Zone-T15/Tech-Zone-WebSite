import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { IComments, IidUserLogin, Iposts} from "../../../Providers/DashboardContext/@types/dashboardTypes";
import Box from '@mui/material/Box';
import Comments from "../../Comments";
import { DashboardContext } from "../../../Providers/DashboardContext";
import { useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import jwt_decode from 'jwt-decode';
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import { useForm } from "react-hook-form";
import { MdOutlinePostAdd } from "react-icons/md";

interface IopemModalComment{
   opemModalComment: true;
   setopemModalComment: React.Dispatch<React.SetStateAction<boolean>>;
   post:Iposts

}
interface IdataForm {
   dataForm: string;
   comment: string;
}

const Transition = React.forwardRef(function Transition(
   props: TransitionProps & {
      children: React.ReactElement;
   },
   ref: React.Ref<unknown>
   ) {
      return <Slide direction="up" ref={ref} {...props} />;
   });
   
   export default function FullScreenDialog({opemModalComment,setopemModalComment,post}:IopemModalComment) {
      
      const {getComments,setGetComments,getAllPosts,users,sendComments} = useContext(DashboardContext)

      const token = localStorage.getItem("@TOKEN");

      const idUserLogin = jwt_decode<IidUserLogin>(token);

      const {comments,id} = post 


   useEffect(() => { 

      setGetComments(comments)

      return ()=> {
         getAllPosts()
      }
   }, []);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<IdataForm>();


   const submit = (dataForm:IdataForm) => {

      const dataObj = {
         postId:id,
         userId:idUserLogin.sub
      }
      
      const data = {...dataObj, ...dataForm}

      sendComments(data)
   };


   const handleClose = () => {
      setopemModalComment(!opemModalComment);
   };

   return (
      <div>
         <Dialog
            fullScreen
            open={opemModalComment}
            onClose={handleClose}
            TransitionComponent={Transition}
         >
            <AppBar sx={{ position: "relative" }}>
               <Toolbar>
                  <IconButton
                     edge="start"
                     color="inherit"
                     onClick={handleClose}
                     aria-label="close"
                  >
                     <CloseIcon />
                  </IconButton>
               </Toolbar>
            </AppBar>
            <Box>
               {getComments.map((comment: IComments) => <Comments key={comment.id} comments={comment} comment={""} />)}
            </Box>

            <Box>
               <Avatar aria-label="recipe">
                  {users.map(user => user.id == idUserLogin.sub ? <img src={user.profile_img} alt={user.name}  key={user.id}/>: null)}
               </Avatar>

            <form onSubmit={handleSubmit(submit)}>

                  <TextField
                     type="textarea"
                     id="textarea"
                     label="Comentario"
                     margin="dense"
                     multiline
                     fullWidth
                     variant="filled"
                     {...register("comment")}
                  />
            
                  <DialogActions>
                     <Button type="submit">Adicionar comentario</Button>
                  </DialogActions>
            
               </form>

            </Box>

         </Dialog>
         
      </div>
   );
}
