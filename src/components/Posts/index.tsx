import { useContext, useEffect, useState} from "react";
import { DashboardContext } from "../../Providers/DashboardContext";
import ListPosts from "./ListPosts";



const Post = () => {

   const {searchPostsList} = useContext(DashboardContext)

   return ( 
      <ul>
         {searchPostsList.map(post => <ListPosts key={post.id} post={post} />)}
      </ul>
   );
};

export default Post;



