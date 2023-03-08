import { IUserProps} from "../../../Providers/DashboardContext/@types/dashboardTypes";
import ListPosts from "../ListPosts";


export const UserPost = ({user}:IUserProps) => {

   const {profile_img,name} = user
   
   return (

      <div>
            {user.posts.map(post => <ListPosts key={post.id} post={post} profile_img={profile_img} name={name}/>)}
      </div>
   );
};
