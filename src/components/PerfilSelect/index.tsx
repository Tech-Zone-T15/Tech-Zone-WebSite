import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const PerfilSelect = () => {
   const theme = useTheme();
   const mdUp = useMediaQuery(theme.breakpoints.up("sm"));

   return (
      <>
         <div>
            <Card sx={{ width: mdUp ? 600 : 300 }}>
               <CardHeader
                  avatar={
                     <Avatar
                        aria-label="Avatar do usuario"
                        sx={{ width: 200, height: 200 }}
                     ></Avatar>
                  }
               />
               <CardContent sx={{ bgcolor: "#e9ecef", wordWrap: "break-word" }}>
                  <Typography color="text.secondary" sx={{ fontSize: "1rem" }}>
                     Dados pessoais
                  </Typography>
   
                  <Typography color="text.secondary" sx={{ fontSize: "1rem" }}>
                     teste
                  </Typography>
   
                  <Typography color="text.secondary" sx={{ fontSize: "1rem" }}>
                     teste
                  </Typography>
   
                  <Typography color="text.secondary" sx={{ fontSize: "1rem" }}>
                     teste
                  </Typography>
   
                  <Typography color="text.secondary" sx={{ fontSize: "1rem" }}>
                     teste
                  </Typography>
               </CardContent>
            </Card>
         </div>

         <div>
            <Card sx={{ width: mdUp ? 600 : 300 }}>

               <CardContent sx={{ bgcolor: "#e9ecef", wordWrap: "break-word" }}>
                  <Typography color="text.secondary" sx={{ fontSize: "1rem" }}>
                     Bio
                  </Typography>
               </CardContent>
            </Card>
         </div>
      </>
   );
};

export default PerfilSelect;
