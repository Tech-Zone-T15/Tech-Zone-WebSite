import { createContext, useState, useEffect, useContext } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import {
   IDefaultProviderProps,
   IDashboardContext,
   Iusers,
   IsendPost,
   IUpdatePost,
   Iposts,
   IUpdateComments,
   IComments,
   Ifollows,
   IUserID,
   ILikingPost,
   IPostLikes
} from "./@types/dashboardTypes";

import jwt_decode from "jwt-decode";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";


export const DashboardContext = createContext({} as IDashboardContext);

export const DashboardProvider = ({ children }: IDefaultProviderProps) => {
   const [followUsers, setFollowUsers] = useState<Iusers[]>([]);

   const [users, setGetUsers] = useState<Iusers[]>([]);

   const [getPosts, setGetPost] = useState<Iposts[]>([]);

   const [getComments, setGetComments] = useState<IComments[]>([]);

   const [ProfilePost,setProfilePost] = useState<Iposts[]>([])

   const navigate = useNavigate();
   
   const [loading, setLoading] = useState(false);


   //-------------------------- Vitor -----------------------------//

   const [searchValue, setSearchValue] = useState("");

   const [filteredPosts, setFilteredPosts] = useState("");

   const [postLikes, setPostLikes] = useState<IPostLikes[]>([])

   //-------------------------------------------------------//


   //---------------------------- Savio ----------------------------//

   
   const { user } = useContext(UserContext);

   const [text1, setText1] = useState("Seguir");
   const [text2, setText2] = useState("Seguir");
   const [text3, setText3] = useState("Seguir");

   const [modalSendPost, setModalSendPost] = useState(false);

   const [allUsersFollowed, setAllUsersFollowed] = useState<Ifollows[]>([]);

   const [likesPosts, setLikesPosts] = useState<IPostLikes[]>([]);


   //-------------------------------------------------------//


   const token = localStorage.getItem("@TOKEN");

   const searchPostsList = getPosts.filter((post) =>
      filteredPosts === ""
         ? true
         : post.content.toLowerCase().includes(filteredPosts.toLowerCase())
   );

   const getUsers = async () => {
      const token = localStorage.getItem("@TOKEN");

      try {
         const response = await api.get(
            "users?_embed=posts&_embed=posts&_embed=comments",
            {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            }
         );

         setGetUsers(response.data);
      } catch (error) {
         console.error(error);
      }
   };

   const getAllPosts = async () => {

      try {
         const response = await api.get("posts?_embed=comments&_embed=likes", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         setLoading(true)

         setGetPost(response.data);
         setPostLikes(response.data.likes)

      } catch (error) {
         console.error(error);
      }

   };

   const sendPost = async (data: IsendPost) => {

   
      
      try {
         const response = await api.post("posts", data, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         setGetPost([...getPosts, response.data])
         toast.success('Sua publicação foi enviada com sucesso')
      } catch (error) {
         console.error(error);
      }

   };

   const AllUsers = async () => {
      const id = user?.id;

      try {
         const response = await api.get("/users", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         const ListFollows = await api.get("/follow", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         
         
         const array = response.data;
         const NewArray: Iusers[] = [];

         const filteredList = ListFollows.data.filter((follow: Ifollows) => {
            return Number(follow.userId) === Number(id);
         });
         
         const NewList = array.filter((user: Iusers) => {
            return !filteredList.some((follow: Ifollows) => {
               return user.id === follow.follows;
            });
         });

         const FinalList = NewList.filter((users: Iusers) => {
            return users.id !== id;
         });

         const length = FinalList.length;

         while (NewArray.length < 3) {
            const RandomNumber1 = FinalList[Math.floor(Math.random() * length)];
            if (!NewArray.includes(RandomNumber1)) {
               NewArray.push(RandomNumber1);
               setFollowUsers(NewArray);
            }
         }
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      AllUsers();
   }, [token]);

   const deletePost = async (postId:Iposts) => {
      const id = postId.id;
      try {
         const response = await api.delete(`posts/${id}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         const newPostList = getPosts.filter((post) => post.id !== id);

         setGetPost(newPostList);

         toast.success("Post Deletado com sucesso")
      } catch (error) {
         console.error;
      }
   };

   const editPost = async (data: IUpdatePost) => {
      const { id } = data;

      const response = await api.put(`posts/${id}`, data, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });

      const newPostList = getPosts.map((post) => {
         if (post.id == id) {
            return { ...post, ...data };
         } else {
            return post;
         }
      });

      setGetPost(newPostList);

      toast.success("Post Editado com sucesso")
   };

   const editcomments = async (data: IUpdateComments) => {
      const { id } = data;

      const response = await api.put(`comments/${id}`, data, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });

      const newCommentsList = getComments.map((Comment) => {
         if (Comment.id == id) {
            return { ...Comment, ...data };
         } else {
            return Comment;
         }
      });

      setGetComments(newCommentsList);

      toast.success("Comentario Editado com sucesso")
   };

   const deleteComments = async (CommentId: IComments) => {
      const { id } = CommentId;

      try {
         const response = await api.delete(`comments/${id}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         const newPostList = getComments.filter((Comment) => Comment.id !== id);

         setGetComments(newPostList);

         toast.success("Comentario Deletado com sucesso")

      } catch (error) {
         console.error;
      }
   };

   const sendComments = async (data: IComments) => {
      try {
         const response = await api.post("comments", data, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         setGetComments([...getComments, response.data]);

         toast.success("Comentario Enviado com sucesso")
         
      } catch (error) {
         console.error(error);
      }
   };
   
   const followedsUsers = async (data: Ifollows) => {
      let loggedId = "";
      if (token) {
         loggedId = jwt_decode<IUserID>(token).sub;
      }
      try {
         const idNumber = Number(loggedId);
         const response = await api.post(`users/${idNumber}/follow`, data, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         setAllUsersFollowed([...allUsersFollowed, response.data])
      } catch (error) {
         toast.error('Erro ao seguir usuário')
      }
   }


   const getProfilePosts = async (post:Iposts) => {

      const {userId} = post
      
      try {
         const response = await api.get(`/users/${userId}/posts?_embed=comments`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         setProfilePost(response.data);

         navigate("/SelectPerfilPage")

      } catch (error) {
         console.error(error);
      }

   };


   useEffect(() => {
      localStorage.setItem('@kenzieTech:ProfilePost',JSON.stringify(ProfilePost));
   }, [ProfilePost]);
   
   //----------------------- VITOR ------------------------ 


   const likingPost = async (data: ILikingPost) => {
      try {
         const response = await api.post('likes', data, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         toast.success("Post curtido com sucesso.")
         const newGetPosts = getPosts.map((post) => {
            if(post.id === data.postId) {
               const teste = ({...post, likes: [...post.likes, response.data ]})
               return teste
            } else {
               return post
            }
         })
         setGetPost(newGetPosts)
      } catch (error) {
         
      }
   }

   const unLinkingPost = async (likeID: number, data: ILikingPost) => {
      try {
         const response = await api.delete(`likes/${likeID}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         }); console.log(response.data)
         const newGetPosts = getPosts.map((post) => {
            if(post.id === data.postId) {
               const newLikes = post.likes.filter((like) =>{
                  return like.id !== likeID 
               })
               const teste = ({...post, likes: [ ...newLikes ]})
               return teste
            } else {
               return post
            }
         })
         setGetPost(newGetPosts)
      } catch (error) {
         console.log(error)
      }
   }


   

   return (
      <DashboardContext.Provider
         value={{
            sendComments,
            sendPost,
            getUsers,
            users,
            deletePost,
            editPost,
            followUsers,
            setGetPost,
            getPosts,
            getAllPosts,
            editcomments,
            getComments,
            setGetComments,
            deleteComments,
            searchValue,
            setSearchValue,
            setFilteredPosts,
            searchPostsList,
            loading,
            postLikes,
            followedsUsers,
            setModalSendPost,
            modalSendPost,
            setText1,
            setText2,
            setText3,
            text1,
            text2,
            text3,
            allUsersFollowed,
            likingPost,
            unLinkingPost,
            likesPosts,
            ProfilePost,
            getProfilePosts
         }}
      >
         {children}
      </DashboardContext.Provider>
   );
}