import { createContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import {
   IDefaultProviderProps,
   IDashboardContext,
   Ipost,
   IComments,
   IsendPost,
   IsendComments,
   Iusers,
  IUpdatePost,
} from "./@types/dashboardTypes";


export const DashboardContext = createContext({} as IDashboardContext);

export const DashboardProvider = ({ children }: IDefaultProviderProps) => {
   const [followUsers, setFollowUsers] = useState<Iusers[]>([]);

   const [posts,setPosts] = useState<Ipost[] >([])
   
 const token = localStorage.getItem("@TOKEN");

   // const getPosts = async () => { // requisição para renderizar os post 
      
   //    try {
   //       const response = await api.get("posts", {
   //          headers: {
   //             Authorization: `Bearer ${token}`,
   //          },
   //       });
   //       setPosts(response.data)
   //    } catch (error) {
   //       console.error(error)
   //    }
   // };

   // useEffect(() => { //Renderizar os produtos a cada atualização da pagina 
   //    getPosts(); 
   // }, []);

   const getComments = async () => {
      // requisição para renderizar os Comentarios

      try {
         const response = await api.get("comments", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
      } catch (error) {
         console.error(error);
      }
   };

   const sendPost = async (data: IsendPost) => {
      //requisição para enviar os post
      try {
         const response = await api.post<Ipost>("post", data, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
      } catch (error) {
         console.error(error);
      }
   };

   const sendComments = async (data: IsendComments) => {
      //requisição para enviar os Comentarios
      try {

         const response = await api.post<IComments>("comments", data, {
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

   const deletePost = async(postId:Ipost) =>{
      const id = postId.id
      try {

         const response = await api.delete(`posts/${id}`,{
            headers:{
               Authorization: `Bearer ${token}`,
            }
         })

         const newPostList = posts.filter(post => post.id !== postId.id)
         setPosts(newPostList)

      } catch (error) {
         console.error
         
      }
   }

   const editPost = async (data:Ipost[],postId:Ipost) => {
      const id = postId.id

      try {

            const response = await api.post(`post/${id}`,data,{
               headers:{
                  Authorization: `Bearer ${token}`,
               }
            })

            const newPostList = posts.map(post => {

               if(id == post.id){
                  return {...post, ...data}
               } else {
                  return post
               }
            })

            setPosts(newPostList)
   
         } catch (error) {
            console.error(error)
         }

   }

   return (

      <DashboardContext.Provider value={{sendComments,sendPost,getComments,
      // getPosts,
      posts,deletePost,editPost , followUsers}}>
         {children}
      </DashboardContext.Provider>
   );
};
