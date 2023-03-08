import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ICommentsProps } from "../../Providers/DashboardContext/@types/dashboardTypes";
import DeleteForever from "@mui/icons-material/DeleteForever";
import Edit from "@mui/icons-material/Edit";

export default function Comments({comments,profile_img,name,}: ICommentsProps) {

   const {comment} = comments

   return (
      <>
         <Card sx={{ maxWidth: 400 }}>
            <CardHeader
               avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                     <img src={profile_img} alt={name} />
                  </Avatar>
               }
               action={
                  <>
                     <IconButton
                        aria-label="deletar post"
                     >
                        <DeleteForever />
                     </IconButton>

                     <IconButton
                        aria-label="editar post"
                        
                     >
                        <Edit />
                     </IconButton>
                  </>
               }
               title={name}
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
      </>
   );
}
