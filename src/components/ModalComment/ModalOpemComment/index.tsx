import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Iusers} from "../../../Providers/DashboardContext/@types/dashboardTypes";
import Box from '@mui/material/Box';
import Comments from "../../Comments";

interface IopemModalComment{
   opemModalComment: true;
   setopemModalComment: React.Dispatch<React.SetStateAction<boolean>>;
   user:Iusers
}


const Transition = React.forwardRef(function Transition(
   props: TransitionProps & {
      children: React.ReactElement;
   },
   ref: React.Ref<unknown>
) {
   return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({opemModalComment,setopemModalComment,user}:IopemModalComment) {
   const {profile_img,name} = user 
   const handleClose = () => {
      setopemModalComment(!opemModalComment);
   };

   return (
      <div>
         <Dialog
            fullScreen
            open={opemModalComment}
            onClose={handleClose}
            TransitionComponent={Transition}
         >
            <AppBar sx={{ position: "relative" }}>
               <Toolbar>
                  <IconButton
                     edge="start"
                     color="inherit"
                     onClick={handleClose}
                     aria-label="close"
                  >
                     <CloseIcon />
                  </IconButton>
               </Toolbar>
            </AppBar>
            <Box>
               {user.comments.map(comment => <Comments key={comment.id} comments={comment} profile_img={profile_img} name={name} comment={""}/>)}
            </Box>
         </Dialog>
      </div>
   );
}
