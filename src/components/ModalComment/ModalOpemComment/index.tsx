import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import {
   IComments,
   IidUserLogin,
   Iposts,
} from "../../../Providers/DashboardContext/@types/dashboardTypes";
import Box from "@mui/material/Box";
import Comments from "../../Comments";
import { DashboardContext } from "../../../Providers/DashboardContext";
import { useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import jwt_decode from "jwt-decode";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { ModalContainer, NotCommentsContainer } from "./styled";
import { Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send'
import imagem from "../../../assets/no-data-icon-29.png";

interface IopemModalComment {
   opemModalComment: true;
   setopemModalComment: React.Dispatch<React.SetStateAction<boolean>>;
   post: Iposts;
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

export default function FullScreenDialog({
   opemModalComment,
   setopemModalComment,
   post,
}: IopemModalComment) {
   const { getComments, setGetComments, getAllPosts, users, sendComments } =
      useContext(DashboardContext);

   const token = localStorage.getItem("@TOKEN");

   const idUserLogin = jwt_decode<IidUserLogin>(token);

   const { comments, id } = post;

   useEffect(() => {
      setGetComments(comments);

      return () => {
         getAllPosts();
      };
   }, []);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<IdataForm>();

   const submit = (dataForm: IdataForm) => {
      const dataObj = {
         postId: id,
         userId: idUserLogin.sub,
      };

      const data = { ...dataObj, ...dataForm };

      sendComments(data);
   };

   const handleClose = () => {
      setopemModalComment(!opemModalComment);
   };

   return (
      <>
         <Dialog
            fullScreen
            open={opemModalComment}
            onClose={handleClose}
            TransitionComponent={Transition}
         >
            <AppBar sx={{ position: "relative" }}>
               <Toolbar sx={{ display:"flex",alignItems:"center",justifyContent:"space-evenly" }}>
                  <Typography sx={{ fontSize:"1.5rem" }}> Comentarios </Typography>
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

            <Box sx={{ bgcolor: "#e9ecef", height: "100vh" }}>
               <ModalContainer>
                  <Box
                     sx={{
                        flexDirection: "column",
                        maxHeight: 600,
                        overflow: "auto",
                        justifyContent:"center",
                        m:'auto'
                     }}
                  >  
                     {
                        getComments.length == 0 ? (
                           <NotCommentsContainer>
                              <Typography sx={{ fontSize:"1.7rem",fontWeight:'bold' }}> Seja o primeiro a comentar</Typography>
                              <img src={imagem} alt="" />
                           </NotCommentsContainer>
                        ):(
                           getComments.map((comment: IComments) => (
                              <Comments
                                 key={comment.id}
                                 comments={comment}
                                 comment={""}
                              />
                           ))
                        )
                     }
                  </Box>

                  <form onSubmit={handleSubmit(submit)}>
                     <Box sx={{ flexDirection: "row",display:"flex",alignItems:"center",justifyContent:"center" }}>
                        <TextField
                           type="textarea"
                           id="textarea"
                           label="Comentario"
                           margin="dense"
                           multiline
                           variant="filled"
                           sx={{ width:400 }}
                           {...register("comment")}
                     />
                     <Button type="submit" variant="text" endIcon={<SendIcon sx={{p:0,m:0,width:"2rem",height:"3.3rem"}} type="button-submit" />} sx={{width:"1rem",height:"3.3rem",p:0,m:0 }}></Button>
                     </Box>
                  </form>
               </ModalContainer>                                                               
            </Box>
         </Dialog>
      </>
   );
}
