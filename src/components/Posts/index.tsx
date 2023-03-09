import { UserPost} from "./UserPost";
import { useContext, useEffect, useState} from "react";
import { DashboardContext } from "../../Providers/DashboardContext";



const Post = () => {

   const {users} = useContext(DashboardContext)

   interface postsVDProps{
      content: string
      id: number 
      img: string
      userId: number
   }

   const [postsVD, setPostsVD] = useState([])
   
   const postsV = users.map(user => user.posts)
   useEffect(() => {
      setPostsVD(postsV)
   },[])
   console.log(postsV)
   console.log(postsVD)
    
   return ( 
      <>
         {users.map(user => <UserPost key={user.id} user={user} />)}
      </>

   );
};

export default Post;


