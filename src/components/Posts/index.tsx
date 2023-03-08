import { UserPost} from "./UserPost";
import { useContext} from "react";
import { DashboardContext } from "../../Providers/DashboardContext";



const Post = () => {

   const {users} = useContext(DashboardContext)
    
   return ( 
      <>
         {users.map(user => <UserPost key={user.id} user={user} />)}
      </>

   );
};

export default Post;


