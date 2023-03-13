import { useContext, useEffect, useState} from "react";
import { DashboardContext } from "../../Providers/DashboardContext";
import ListPosts from "./ListPosts";
import { Ul } from "./styled";



const Post = () => {

   const {searchPostsList} = useContext(DashboardContext)

   return ( 
      <Ul>
         {searchPostsList.map(post => <ListPosts key={post.id} post={post} />)}
      </Ul>
   );
};

export default Post;



