import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

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

export const UserFollowing = ({ id }) => {
   const token = localStorage.getItem("@TOKEN");
   const [user, setUser] = useState<Omit<iUser, "password">>();

   useEffect(() => {
      async function getUser(id) {
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
      getUser(id);
   }, []);

   return (
      <li>
         <Card sx={{ maxWidth: 200, minWidth: 150 }}>
            <CardHeader
               avatar={
                  <Avatar>
                     <img src={user?.profile_img} alt={user?.name} />
                  </Avatar>
               }
               title={user?.name}
            />
            <Typography variant="caption">Deixar de seguir</Typography>
         </Card>
      </li>
   );
};
