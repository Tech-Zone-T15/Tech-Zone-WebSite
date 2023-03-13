import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { ProfileContext } from "../../Providers/ProfileContext";
import { IUser } from "../../Providers/UserContext/@types";
import { UnfollowButtonStyled } from "./style";
import { Img } from "../../components/Posts/ListPosts/styled";


interface iUser {
   email: string;
   password: string;
   name: string;
   profile_img: string;
   age: string;
   city: string;
   bio: string;
   id: number;
}
interface iUserFollowing {
   id?: number;
   followId: number;
   userObj?: IUser;
}

export const UserFollowing = ({ id, followId, userObj }: iUserFollowing) => {
   const token = localStorage.getItem("@TOKEN");
   const [user, setUser] = useState<Omit<iUser, "password">>();
   const { followingList, follow, unfollow} = useContext(ProfileContext)

   useEffect(() => {
      async function getUser(id: number) {
         try {
            const response = await api.get(`/users/${id}`, {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });
            setUser(response.data);
         } catch (error) {
            if (axios.isAxiosError(error)) {
               toast.error(error.response?.data);
            }
         }
      }
      id && getUser(id);
   }, []);

   return userObj ? (
      <li>
         <Card sx={{ maxWidth: 200, minWidth: 150 }}>
            <CardHeader
               avatar={
                  <Avatar
                     aria-label="Avatar do usuario"
                     sx={{ width: 50, height: 50 }}
                  >
                     <Img src={userObj.profile_img} alt={userObj.name} />
                  </Avatar>
               }
               title={userObj.name}
            />
            { 
               followingList.some(user => user.follows === userObj.id) ? (
                  <UnfollowButtonStyled>
                     <Typography variant="caption">Seguindo</Typography>
                  </UnfollowButtonStyled>
               ): (
                  <UnfollowButtonStyled onClick={() => follow(userObj.id)}>
                     <Typography variant="caption">Seguir de volta</Typography>
                  </UnfollowButtonStyled>
               )
            }
         </Card>
      </li>
   ) : (
      <li>
         <Card sx={{ maxWidth: 200, minWidth: 150 }}>
            <CardHeader
               avatar={
                  <Avatar>
                     <Img src={user?.profile_img} alt={user?.name} />
                  </Avatar>
               }
               title={user?.name}
            />
            <UnfollowButtonStyled
               type="button"
               onClick={() => unfollow(followId)}
            >
               <Typography variant="caption">Deixar de seguir</Typography>
            </UnfollowButtonStyled>
         </Card>
      </li>
   );
};
