import { UserPost} from "./UserPost";
import { useContext, useEffect, useState} from "react";
import { DashboardContext } from "../../Providers/DashboardContext";
import ListPosts from "./ListPosts";



const Post = () => {

   const {users} = useContext(DashboardContext)

   // interface postsVDProps{
   //    content: string
   //    id: number 
   //    img: string
   //    userId: number
   // }

   // const [postsVD, setPostsVD] = useState([])
   
   // const postsV = users.map(user => user.posts)
   // useEffect(() => {
   //    setPostsVD(postsV)
   // },[])
   // console.log(postsV)
   // console.log(postsVD)



   const {getPosts} = useContext(DashboardContext)



   return ( 
      <>
         {getPosts.map(post => <ListPosts key={post.id} post={post} />)}
      </>

   );
};

export default Post;



