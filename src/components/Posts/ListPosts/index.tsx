import { useContext, useState } from "react";
import ModalPostDelete from "../../ModalPostDelete";
import ModalPostEdit from "../../ModalPostEdit";
import { IpostsProps,IidUserLogin } from "../../../Providers/DashboardContext/@types/dashboardTypes";
import ModalOpemComment from "../../ModalComment/ModalOpemComment";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddComment from "@mui/icons-material/AddComment";
import DeleteForever from "@mui/icons-material/DeleteForever";
import  Edit  from "@mui/icons-material/Edit";
import { DashboardContext } from "../../../Providers/DashboardContext";
import jwt_decode from 'jwt-decode';
import { CardContainer, Img } from "./styled";
import CardActionArea from "@mui/material/CardActionArea";



const ListPosts = ({ post}: IpostsProps) => {

      const {users} = useContext(DashboardContext)

      const { img, content,userId } = post;

      const token = localStorage.getItem("@TOKEN");

      const idUserLogin = jwt_decode<IidUserLogin>(token);
      
   const [opemModal, setOpemModal] = useState(false);
   const [opemModalEdit, setOpemModalEdit] = useState(false);
   const [opemModalComment, setopemModalComment] = useState(false);


   return (
      <>
         <CardContainer>
         <Card sx={{ minWidth: 300, maxWidth:600}}>
            <CardActionArea >
            <CardHeader
               avatar={
                  <Avatar aria-label="Avatar do usuario" sx={{ width: 50, height: 50,}}>
                        {users.map(user => user.id == userId ? <Img src={user.profile_img} alt={user.name}  key={user.id}/>: null)}
                  </Avatar>
               }
               action={
                  
                  idUserLogin.sub == userId ? (
                     <>
                        <IconButton aria-label="deletar post" onClick={() =>setOpemModal(!opemModal)}>
                           <DeleteForever/>
                        </IconButton>
                        <IconButton aria-label="editar post"  onClick={() =>setOpemModalEdit(!opemModalEdit)}>
                           <Edit/>
                        </IconButton>
                     </>
                     ):(null)
                  }
                  
                  title={users.map(user => user.id == post.userId ?  user.name : null)}
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

            <CardContent >
               <Typography variant="body2" color="text.secondary">
               {content}
               </Typography>
            </CardContent>

            </CardActionArea>
            
            <CardActions disableSpacing>

               <IconButton aria-label="add to favorites" >
                  <FavoriteIcon />
               </IconButton>

               <IconButton aria-label="Abri comentarios " onClick={() =>setopemModalComment(!opemModalComment)}>
                  <AddComment/>
               </IconButton>
            </CardActions>
         </Card>
         </CardContainer>

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
      </>
   );
};

export default ListPosts;


