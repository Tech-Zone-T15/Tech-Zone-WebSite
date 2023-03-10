import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ICommentsProps,IidUserLogin } from "../../Providers/DashboardContext/@types/dashboardTypes";
import DeleteForever from "@mui/icons-material/DeleteForever";
import Edit from "@mui/icons-material/Edit";
import { useContext, useState } from "react";
import { DashboardContext } from "../../Providers/DashboardContext";
import ModalCommentEdit from "../ModalComment/ModalOpemComment/ModalCommentEdit";
import jwt_decode from 'jwt-decode';
import ModalCommentDelete from "../ModalComment/ModalOpemComment/ModalCommentDelete";


export default function Comments({comments}: ICommentsProps) {

   const {comment,userId} = comments

   const {users} = useContext(DashboardContext)

   const token = localStorage.getItem("@TOKEN");

   const idUserLogin = jwt_decode<IidUserLogin>(token);

   const [opemModalDelete, setOpemModalDelete] = useState(false);
   const [opemModalEdit, setOpemModalEdit] = useState(false);

   return (
      <>
         <Card sx={{ maxWidth: 400 }}>
            <CardHeader
               avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                     {users.map(user => user.id == userId ? <img src={user.profile_img} alt={user.name}  key={user.id}/>: null)}
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
                  title={users.map(user => user.id == userId ?  user.name : null)}
            />
            <CardContent>
               <Typography variant="body2" color="text.secondary">
                  {comment}
               </Typography>
            </CardContent>
            <CardActions disableSpacing>
               <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
               </IconButton>
            </CardActions>
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
