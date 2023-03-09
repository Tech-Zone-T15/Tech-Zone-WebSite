import { useContext, useState } from "react";
import { ProfileContext } from "../../Providers/ProfileContext";
import { UserContext } from "../../Providers/UserContext";
import { Typography } from "@mui/material";
import { MyPostsStyle } from "./style";
import ModalPostDelete from "../ModalPostDelete";
import ModalPostEdit from "../ModalPostEdit";
import imagem from "../../assets/no-data-icon-29.png";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteForever from "@mui/icons-material/DeleteForever";
import Edit from "@mui/icons-material/Edit";
import CardActions from "@mui/material/CardActions";
import AddComment from "@mui/icons-material/AddComment";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import ModalOpemComment from "../ModalComment/ModalOpemComment";

export const MyPostsList = () => {
   const { myPosts } = useContext(ProfileContext);
   const { user } = useContext(UserContext);
   const [openModal, setOpenModal] = useState(false);
   const [openModalEdit, setOpenModalEdit] = useState(false);
   const [openModalComment, setopenModalComment] = useState(false);

   return (
      <MyPostsStyle>
         <Typography variant="h5">Minhas publicações</Typography>
         {myPosts.length === 0 ? (
            <>
               <img src={imagem} alt="" />
               <Typography variant="subtitle2">
                  Ops, parece que você ainda não publicou nada, que tal fazer
                  sua primeira publicação?
               </Typography>
               <h1>O input de postar quando estiver pronto</h1>
            </>
         ) : (
            <ul>
               {myPosts.map((post) => (
                  <li>
                     <CardHeader
                        avatar={
                           <Avatar>
                              <img src={user?.profile_img} alt="" />
                           </Avatar>
                        }
                        action={
                           <>
                              <IconButton
                                 aria-label="deletar post"
                                 onClick={() => setOpenModal(!openModal)}
                              >
                                 <DeleteForever />
                              </IconButton>
                              <IconButton
                                 aria-label="editar post"
                                 onClick={() =>
                                    setOpenModalEdit(!openModalEdit)
                                 }
                              >
                                 <Edit />
                              </IconButton>
                           </>
                        }
                        title={user?.name}
                     />
                     {post.img && <CardMedia
                        component="img"
                        height="194"
                        src={post.img}
                        alt="Imagem do post"
                     />}
                     <CardContent>
                        <Typography variant="body2" color="text.secondary">
                           {post.content}
                        </Typography>
                     </CardContent>
                     <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                           <FavoriteIcon />
                        </IconButton>
                       
                     </CardActions>

                     {openModal && (
                        <ModalPostDelete
                           opemModal={openModal}
                           setOpemModal={setOpenModal}
                           post={post}
                        />
                     )}
                     {openModalEdit && (
                        <ModalPostEdit
                           opemModalEdit={openModalEdit}
                           setOpemModalEdit={setOpenModalEdit}
                           post={post}
                        />
                     )}
                  </li>
               ))}
            </ul>
         )}
      </MyPostsStyle>
   );
};
