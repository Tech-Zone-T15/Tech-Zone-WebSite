import Card from "@mui/material/Card";
import animationData from "../Posts/ListPosts/heartAnimation.json"
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ICommentsProps,IidUserLogin } from "../../Providers/DashboardContext/@types/dashboardTypes";
import DeleteForever from "@mui/icons-material/DeleteForever";
import Edit from "@mui/icons-material/Edit";
import { useContext, useState } from "react";
import { DashboardContext } from "../../Providers/DashboardContext";
import ModalCommentEdit from "../ModalComment/ModalOpemComment/ModalCommentEdit";
import jwt_decode from 'jwt-decode';
import ModalCommentDelete from "../ModalComment/ModalOpemComment/ModalCommentDelete";
import { Img } from "../Posts/ListPosts/styled";
import { StyledlikeAnimationContainer } from "../Posts/ListPosts/style";
import Lottie from "react-lottie";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Comments({comments}: ICommentsProps) {


   const theme = useTheme();
   const mdUp = useMediaQuery(theme.breakpoints.up('sm'));

   const {comment,userId} = comments

   const {users} = useContext(DashboardContext)

   const token = localStorage.getItem("@TOKEN");

   const idUserLogin = jwt_decode<IidUserLogin>(token);

   const [opemModalDelete, setOpemModalDelete] = useState(false);
   const [opemModalEdit, setOpemModalEdit] = useState(false);


   const [likeState, setLikeState] = useState(false);
   const [animationState, setAnimationState] = useState({
      isStopped: true,
      isPaused: false,
   });
   const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: animationData,
      rendererSettings: {
         preserveAspectRatio: "xMidYMid slice",
      },
   };

   return (
      <>
         <Card sx={{width:mdUp ? 400 : 300, mt:"1rem" }}>
            <CardHeader
               avatar={
                  <Avatar sx={{ width: 50, height: 50 }} aria-label="recipe">
                     {users.map(user => user.id == userId ? <Img src={user.profile_img} alt={user.name}  key={user.id}/>: null)}
                  </Avatar>
               }
               action={
                  idUserLogin.sub == userId ? (
                  <>
                     <IconButton aria-label="deletar post" onClick={() =>setOpemModalDelete(!opemModalDelete)}>
                        <DeleteForever/>
                     </IconButton>
                     <IconButton aria-label="editar post"  onClick={() =>setOpemModalEdit(!opemModalEdit)}>
                        <Edit/>
                     </IconButton>
                  </>):(null)
               }
                  
                  title={
                     <Typography  color="text.secondary" sx={{ fontSize:"1.1rem",}} >
                        {users.map(user => user.id == userId ?  user.name : null)}
                     </Typography>
                  }
                  sx={{ borderBottom: 2,borderColor: '#004182'}}
            />
            <CardContent sx={{ wordWrap:'break-word'}}>
               <Typography variant="body2" color="text.secondary" sx={{ fontSize:"1rem"}}>
                  {comment}
               </Typography>
            </CardContent>

            <StyledlikeAnimationContainer
                  onClick={() => {
                     setAnimationState({
                        ...animationState,
                        isStopped: !animationState.isStopped,
                     });
                     setLikeState(!likeState);
                  }}
               >
                  <div className="animation">
                     <Lottie
                        options={defaultOptions}
                        height={40}
                        width={200}
                        isStopped={animationState.isStopped}
                        isPaused={animationState.isPaused}
                     />
                  </div>
               </StyledlikeAnimationContainer>

         </Card>

         {opemModalDelete && (
            <ModalCommentDelete
            opemModalDelete={opemModalDelete}
            setOpemModalDelete={setOpemModalDelete}
               comments={comments}
            />
         )} 

         {opemModalEdit && (
            <ModalCommentEdit
               opemModalEdit={opemModalEdit}
               setOpemModalEdit={setOpemModalEdit}
               comments={comments}
            />
         )}

      </>
   );
}
