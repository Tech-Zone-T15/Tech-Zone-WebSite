import { ListPost } from "./ListPosts";
import { useContext,useState} from "react";
import { DashboardContext } from "../../Providers/DashboardContext";
import { UserContext } from "../../Providers/UserContext";


const Post = () => {

   const {posts} = useContext(DashboardContext)
   const {allUser} = useContext(UserContext)


   return ( 
      <>
            {posts.map(post => <ListPost key={post.id} post={post} />)}
      </>

   );
};

export default Post;


{/* <div>
<h2>Usuario</h2>
<img src="" alt="Foto do usuario" />
</div> */}
