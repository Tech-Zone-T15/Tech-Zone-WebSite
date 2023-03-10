import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";

interface MediaProps {
   loading?: boolean;
}

function SkeletonPost(props: MediaProps) {
   const { loading = false } = props;

   return (
      <Card sx={{ maxWidth: 400, m: 2 }}>
         <CardHeader
            avatar={

                  <Skeleton
                     animation="wave"
                     variant="circular"
                     width={40}
                     height={40}
                  />

            }
            action={
               
                  <IconButton aria-label="settings">
                     <MoreVertIcon />
                  </IconButton>

            }
            title={
                  <Skeleton
                     animation="wave"
                     height={10}
                     width="80%"
                     style={{ marginBottom: 6 }}
                  />
            }
            subheader={
                  <Skeleton animation="wave" height={10} width="40%" />
            }
         />

            <Skeleton
               sx={{ height: 190 }}
               animation="wave"
               variant="rectangular"
            />

         <CardContent>
               <React.Fragment>
                  <Skeleton
                     animation="wave"
                     height={10}
                     style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
               </React.Fragment>
         </CardContent>
      </Card>
   );
}

export default SkeletonPost 


