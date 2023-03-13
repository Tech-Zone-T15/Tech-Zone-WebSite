import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useContext } from "react";
import { DashboardContext } from "../../Providers/DashboardContext";
import {  Iusers, ProfilePostProps } from "../../Providers/DashboardContext/@types/dashboardTypes";
import { ImgProfile } from "./styled";


const PerfilSelect = ({ProfilePost}:ProfilePostProps) => {

   const {users} = useContext(DashboardContext)

   const theme = useTheme();
   const mdUp = useMediaQuery(theme.breakpoints.up("sm"));

   const {userId} = ProfilePost


   const userData = users.find((user:Iusers) => user.id == userId)

   return (
      <>
         <div>
            <Card sx={{ width: mdUp ? 600 : 300 }}>
               <CardHeader
                  avatar={
                     <Avatar
                        aria-label="Avatar do usuario"
                        sx={{ width: 200, height: 200 }}
                     >
                           <ImgProfile src={userData?.profile_img} alt={userData?.name}/>
                     </Avatar>
                  }
               />
               <CardContent sx={{ bgcolor: "#e9ecef", wordWrap: "break-word" }}>

                  <Typography color="text.secondary" sx={{ fontSize: "1.5rem" }}>
                     Dados Pessoais 
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: "1rem" }}>
                     {`Nome: ${userData?.name}`}
                  </Typography>
   
                  <Typography color="text.secondary" sx={{ fontSize: "1rem" }}>
                  {`Email: ${userData?.email}`}
                  </Typography>
   
                  <Typography color="text.secondary" sx={{ fontSize: "1rem" }}>
                  {`Cidade: ${userData?.city}`}
                  </Typography>
   
               </CardContent>
            </Card>
         </div>

         <div>
            <Card sx={{ width: mdUp ? 600 : 300 }}>

               <CardContent sx={{ bgcolor: "#e9ecef", wordWrap: "break-word" }}>
                  <Typography color="text.secondary" sx={{ fontSize: "1rem" }}>
                  {`Bio: ${userData?.bio}`}
                  </Typography>
               </CardContent>
            </Card>

            <Typography color="text.secondary" sx={{ fontSize: "2rem" }}>
                  Posts
            </Typography>
         </div>
      </>
   );
};

export default PerfilSelect;
