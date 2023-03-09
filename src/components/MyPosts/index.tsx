import { useContext } from "react";
import { ProfileContext } from "../../Providers/ProfileContext";
import { UserContext } from "../../Providers/UserContext";
import ListPosts from "../Posts/ListPosts";
import { Typography } from "@mui/material";
import { MyPostsStyle } from "./style";
import imagem from '../../assets/no-data-icon-29.png'

export const MyPostsList = () => {
   const { myPosts } = useContext(ProfileContext);
   const { user } = useContext(UserContext);

   return (
      <MyPostsStyle>
         <Typography variant="h5">Minhas publicações</Typography>
         {myPosts.length === 0 ? (
            <>
               <img src={imagem} alt="" />
               <Typography variant="subtitle2">
                  Ops, parece que você ainda não publicou nada, que tal fazer sua
                  primeira publicação?
               </Typography>
               <h1>O input de postar quando estiver pronto</h1>
            </>
         ) : (
            <ul>
               {myPosts.map((post) => (
                  <li key={post.id}>
                     <ListPosts
                        name={user.name}
                        profile_img={user.profile_img}
                        post={post}
                        user={user}
                     />
                  </li>
               ))}
            </ul>
         )}
      </MyPostsStyle>
   );
};
