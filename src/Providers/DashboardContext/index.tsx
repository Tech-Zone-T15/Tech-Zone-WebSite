import { createContext,useState,useEffect } from "react";
import { api } from "../../services/api";
import {IDefaultProviderProps,IDashboardContext,Ipost,IsendPost,IsendComments,IUpdatePost} from "./@types/dashboardTypes";

export const DashboardContext = createContext({} as IDashboardContext);

export const DashboardProvider = ({ children }: IDefaultProviderProps) => {

   const [posts,setPosts] = useState<Ipost[] >([])
   
   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppbmhvQG1haWwuY29tIiwiaWF0IjoxNjc4MTU2MTAwLCJleHAiOjE2NzgxNTk3MDAsInN1YiI6IjEifQ.Bv_gYepf6tTSh3y5KeH0T7bI55b9k6jkfEbAhbbiLPo"; // Esta faltando o localStorage do token

   const getPosts = async () => { // requisição para renderizar os post 
      
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

   useEffect(() => { //Renderizar os produtos a cada atualização da pagina 
      getPosts(); 
   }, []);

   
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
      <DashboardContext.Provider value={{sendComments,sendPost,getComments,getPosts,posts,deletePost,editPost }}>
         {children}
      </DashboardContext.Provider>
   );
};
