import { useContext} from "react";
import { DashboardContext } from "../../Providers/DashboardContext";
import ListPosts from "./ListPosts";



const Post = () => {



   const {getPosts} = useContext(DashboardContext)

   return ( 
      <>
         {getPosts.map(post => <ListPosts key={post.id} post={post} />)}
      </>

   );
};

export default Post;



