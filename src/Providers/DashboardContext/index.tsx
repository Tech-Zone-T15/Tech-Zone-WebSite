import { createContext, useState, useEffect } from "react";
import { api } from "../../services/api";

import {
   IDefaultProviderProps,
   IDashboardContext,
   Iusers,
   IsendPost,
   IsendComments,
   IUpdatePost,
   Iposts,
   IUpdateComments,
   IComments,
} from "./@types/dashboardTypes";

export const DashboardContext = createContext({} as IDashboardContext);

export const DashboardProvider = ({ children }: IDefaultProviderProps) => {
   const [followUsers, setFollowUsers] = useState<Iusers[]>([]);

   const [users, setGetUsers] = useState<Iusers[]>([]);

   const [getPosts, setGetPost] = useState<Iposts[]>([]);

   const [getComments, setGetComments] = useState<IComments[]>([]);

   //-------------------------- Vitor -----------------------------//

   const [searchValue, setSearchValue] = useState("");

   const [filteredPosts, setFilteredPosts] = useState("");

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
      // requisição para renderizar os post

      try {
         const response = await api.get("posts?_embed=users&_embed=comments", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         setGetPost(response.data);
      } catch (error) {
         console.error(error);
      }
   };

   const sendPost = async (data: IsendPost) => {
      //requisição para enviar os post
      try {
         const response = await api.post("post", data, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
      } catch (error) {
         console.error(error);
      }
   };

   const AllUsers = async () => {
      try {
         const response = await api.get("/users", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         const array = response.data;
         const ArraySize = array.length;
         const NewArray: Iusers[] = [];
         while (NewArray.length < 3) {
            const RandomNumber1 = array[Math.floor(Math.random() * ArraySize)];
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

   const deletePost = async (postId: Iusers) => {
      const id = postId.id;
      try {
         const response = await api.delete(`posts/${id}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         const newPostList = getPosts.filter((post) => post.id !== id);

         setGetPost(newPostList);
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
   };

   const deleteComments = async (CommentId: IUpdateComments) => {
      const { id } = CommentId;

      try {
         const response = await api.delete(`comments/${id}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         const newPostList = getComments.filter((Comment) => Comment.id !== id);

         setGetComments(newPostList);
      } catch (error) {
         console.error;
      }
   };

   const sendComments = async (data: IComments[]) => {
      try {
         const response = await api.post("comments", data, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         setGetComments([...getComments, response.data]);
      } catch (error) {
         console.error(error);
      }
   };

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
            searchPostsList
         }}
      >
         {children}
      </DashboardContext.Provider>
   );
};
