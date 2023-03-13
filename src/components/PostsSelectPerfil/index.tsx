import Lottie from "react-lottie";
import animationData from "../Posts/ListPosts/heartAnimation.json";
import { useContext, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddComment from "@mui/icons-material/AddComment";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StyledlikeAnimationContainer } from "../Posts/ListPosts/style";
import ModalOpemComment from "../ModalComment/ModalOpemComment";
import { IpostsProps } from "../../Providers/DashboardContext/@types/dashboardTypes";
import { Img } from "../Posts/ListPosts/styled";
import { DashboardContext } from "../../Providers/DashboardContext";

const PostsSelectPerfil = ({ post }: IpostsProps) => {
   const { img, content, userId } = post;

   const { users } = useContext(DashboardContext);
   
   const theme = useTheme();
   const mdUp = useMediaQuery(theme.breakpoints.up("sm"));


   const [opemModalComment, setopemModalComment] = useState(false);
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
      <li>
         <Card sx={{ width: mdUp ? 600 : 300 }}>
            <CardHeader
               avatar={
                  <Avatar
                     aria-label="Avatar do usuario"
                     sx={{ width: 50, height: 50 }}
                  >
                     {users.map((user) =>
                        user.id == userId ? (
                           <Img
                              src={user.profile_img}
                              alt={user.name}
                              key={user.id}
                           />
                        ) : null
                     )}
                  </Avatar>
               }
               title={
                  <Typography
                     color="text.secondary"
                     sx={{ fontSize: "1.2rem" }}
                  >
                     {users.map((user) =>
                        user.id == post.userId ? user.name : null
                     )}
                  </Typography>
               }
               sx={{ borderBottom: 2, borderColor: "#004182" }}
            />
            {img.length !== 0 ? (
               <CardMedia
                  component="img"
                  height="194"
                  src={img}
                  alt="Imagem do post"
               />
            ) : null}

            <CardContent sx={{ bgcolor: "#e9ecef", wordWrap: "break-word" }}>
               <Typography color="text.secondary" sx={{ fontSize: "1rem" }}>
                  {content}
               </Typography>
            </CardContent>

            <CardActions
               disableSpacing
               sx={{
                  borderTop: 2,
                  borderColor: "#004182",
                  justifyContent: "space-around",
               }}
            >
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

               <IconButton
                  aria-label="Abri comentarios "
                  onClick={() => setopemModalComment(!opemModalComment)}
               >
                  <AddComment />
               </IconButton>
            </CardActions>
         </Card>

         {opemModalComment && (
            <ModalOpemComment
               opemModalComment={opemModalComment}
               setopemModalComment={setopemModalComment}
               post={post}
            />
         )}
      </li>
   );
};

export default PostsSelectPerfil