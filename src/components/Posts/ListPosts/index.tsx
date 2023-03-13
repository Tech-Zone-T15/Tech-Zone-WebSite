import { useContext, useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "./heartAnimation.json";
import ModalPostDelete from "../../ModalPostDelete";
import ModalPostEdit from "../../ModalPostEdit";
import {IPostLikes, IpostsProps} from "../../../Providers/DashboardContext/@types/dashboardTypes";
import ModalOpemComment from "../../ModalComment/ModalOpemComment";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddComment from "@mui/icons-material/AddComment";
import DeleteForever from "@mui/icons-material/DeleteForever";
import Edit from "@mui/icons-material/Edit";
import { DashboardContext } from "../../../Providers/DashboardContext";
import { StyledlikeAnimationContainer } from "./style";
import { Img } from "./styled";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { UserContext } from "../../../Providers/UserContext";



const ListPosts = ({ post }: IpostsProps) => {

   const {users, 
      // getProfilePosts, 
      likingPost, unLinkingPost } = useContext(DashboardContext);

   const { user } = useContext(UserContext);

   const { img, content,userId } = post;


   
   //------------------------------------
   const [likesPosts, setLikesPosts] = useState<IPostLikes[]>([]);

   useEffect(() => {
      setLikesPosts(post.likes)
   })
   // console.log(typeof likesPosts)
   

   const data  = {
      postId: post.id,
      userId: user?.id
   }
   
   const buttonToggleValidate = likesPosts?.find((like) => 
       like.userId === user!.id
      ) ? true : false


   const handleClick = () => {
      if(user !== null){
         const findLikes = likesPosts?.find((like) => {
            return like.userId === user.id
         }) 
         // console.log(findLikes)
         if(findLikes){ console.log(findLikes)
            unLinkingPost(findLikes.id, data)
         } else {
            likingPost(data)
         }
      }
   }
   //--------------------------------------
      
   // const idUserLogin = jwt_decode<IidUserLogin>(token);

   const theme = useTheme();
   const mdUp = useMediaQuery(theme.breakpoints.up('sm'));

   const [opemModal, setOpemModal] = useState(false);
   const [opemModalEdit, setOpemModalEdit] = useState(false);
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
         <Card sx={{ width:mdUp ? 600 : 300 }}>

            <CardHeader
               avatar={
                  <Avatar aria-label="Avatar do usuario" sx={{ width: 50, height: 50, cursor:'pointer'}} 
                     // onClick={() => getProfilePosts(post)}
                  >
                        {users.map(user => user.id == userId ? <Img src={user.profile_img} alt={user.name}  key={user.id}/>: null)}
                  </Avatar>
               }
               action={
                  
                  user?.id== userId ? (
                     <>
                        <IconButton 
                           aria-label="deletar post"
                           onClick={() => setOpemModal(!opemModal)}
                        >
                           <DeleteForever />
                        </IconButton>
                        <IconButton
                           aria-label="editar post"
                           onClick={() => setOpemModalEdit(!opemModalEdit)}
                        >
                           <Edit />
                        </IconButton>
                     </>
                     ):(null)
                  }
                  
                  title={
                     <Typography  color="text.secondary" sx={{ fontSize:"1.2rem",cursor:'pointer',width:'9rem'}} 
                     //  onClick={() => getProfilePosts(post)}
                     >
                        {users.map(user => user.id == post.userId ?  user.name : null)}
                     </Typography>
                  }

                  sx={{ borderBottom: 2,borderColor: '#004182' }}

                  
                  
                  />
            {
               img.length !== 0 ?(
                  <CardMedia
                  component="img"
                  height="194"
                  src={img} 
                  alt="Imagem do post" 
                  />
                  ):(null)
               }

            <CardContent  sx={{bgcolor: '#e9ecef',wordWrap:'break-word' }}>
               <Typography color="text.secondary" sx={{ fontSize:"1rem"}}>

                  {content}
               </Typography>
            </CardContent>

            
            <CardActions disableSpacing sx={{borderTop: 2,borderColor: '#004182', justifyContent: 'space-around' }}>

               
                  <StyledlikeAnimationContainer
                  onClick={() => {
                     setAnimationState({
                        ...animationState,
                        isStopped: !animationState.isStopped,
                     });
                     setLikeState(!likeState);
                     handleClick();
                  }}
                  >
                     <div className="animation">
                        <Lottie
                           options={defaultOptions}
                           height={40}
                           width={200}
                           isStopped={buttonToggleValidate ? false : true}
                           isPaused={animationState.isPaused}
                           />
                     </div> 
                  <span>{likesPosts?.length}</span>

                  </StyledlikeAnimationContainer>


               

               <IconButton
                  aria-label="Abri comentarios "
                  onClick={() => setopemModalComment(!opemModalComment)}>
                  <AddComment />
               </IconButton>

            </CardActions>
         </Card>

         {opemModal && (
            <ModalPostDelete
            opemModal={opemModal}
            setOpemModal={setOpemModal}
            post={post}
            />
         )}
         {opemModalEdit && (
            <ModalPostEdit
               opemModalEdit={opemModalEdit}
               setOpemModalEdit={setOpemModalEdit}
               post={post}
            />
            )}
         {opemModalComment && (
            <ModalOpemComment
            opemModalComment={opemModalComment}
            setopemModalComment={setopemModalComment}
            post={post}
            />
         )}
      </li>
   );
}


export default ListPosts
