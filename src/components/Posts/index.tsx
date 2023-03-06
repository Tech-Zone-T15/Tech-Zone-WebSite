import { ListPost } from "./ListPosts";
import { useContext} from "react";
import { DashboardContext } from "../../Providers/DashboardContext";


const Post = () => {

   const {posts} = useContext(DashboardContext)

   return (
      <>
         {
            posts.map(post => <ListPost key={post.id} post={post}/>)
         }
      </>

   );
};

export default Post;
