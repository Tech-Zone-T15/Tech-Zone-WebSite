import { createContext,useState,useEffect } from "react";
import { api } from "../../services/api";
import {IDefaultProviderProps,IDashboardContext,Ipost,IsendPost,IsendComments,IUpdatePost} from "./@types/dashboardTypes";

export const DashboardContext = createContext({} as IDashboardContext);

export const DashboardProvider = ({ children }: IDefaultProviderProps) => {

   const [posts,setPosts] = useState<Ipost[]>([])
   const token = localStorage.getItem("@TOKEN");
   
   
   const getPosts = async () => { // requisição para renderizar os post 

      const token = localStorage.getItem("@TOKEN");
      
      try {
         const response = await api.get("posts", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         setPosts(response.data)
      } catch (error) {
         console.error(error)
      }
   };


   
   const getComments = async () => { // requisição para renderizar os Comentarios
      
      try {
         const response = await api.get("comments", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         
      } catch (error) {
         console.error(error)
      }
   };
   
   
      const sendPost = async(data:IsendPost) => { //requisição para enviar os post 
         try {
            const response = await api.post("post",data,{
               headers:{
                  Authorization: `Bearer ${token}`,
               }
            })
   
         } catch (error) {
            console.error(error)
         }
      }

   const sendComments = async(data:IsendComments) => { //requisição para enviar os Comentarios
      try {
         const response = await api.post("comments",data,{
            headers:{
               Authorization: `Bearer ${token}`,
            }
         })

      } catch (error) {
         console.error(error)
      }
   }

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

   const editPost = async (data:IUpdatePost) => {
      const {id} = data

      try {

            const response = await api.put(`posts/${id}`,data,{
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
      <DashboardContext.Provider value={{sendComments,sendPost,getComments,getPosts,posts,deletePost,editPost }}>
         {children}
      </DashboardContext.Provider>
   );
};
