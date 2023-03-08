import { createContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import {IDefaultProviderProps,IDashboardContext,Iusers,IsendPost,IsendComments,IUpdatePost} from "./@types/dashboardTypes";


export const DashboardContext = createContext({} as IDashboardContext);

export const DashboardProvider = ({ children }: IDefaultProviderProps) => {
   const [followUsers, setFollowUsers] = useState<Iusers[]>([]);

   const [users ,setGetUsers ] = useState<Iusers[]>([])

   const token = localStorage.getItem("@TOKEN");
   

   const getUsers = async () => { // requisição para renderizar os post 


      const token = localStorage.getItem("@TOKEN");
      
      try {
         const response = await api.get("users?_embed=posts&_embed=posts&_embed=comments", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         setGetUsers(response.data)
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

   const sendComments = async (data: IsendComments) => {
      //requisição para enviar os Comentarios
      try {

         const response = await api.post("comments", data, {
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

   const deletePost = async(postId:Iusers) =>{
      const id = postId.id
      try {

         const response = await api.delete(`posts/${id}`,{
            headers:{
               Authorization: `Bearer ${token}`,
            }
         })

         const newPostList = users.filter(user => user.id !== postId.id)
         setGetUsers (newPostList)

      } catch (error) {
         console.error;
      }
   };

   const editPost = async (data:IUpdatePost) => {
      const {id} = data

            const response = await api.put(`posts/${id}`,data,{
               headers:{
                  Authorization: `Bearer ${token}`,
               }
            })

            const newPostList = users.map(user => {
      
               if(id == user.id){
                  return {...user, data}
               } else {
                  return user
               }
            })

            //setGetUsers(newPostList)

   };

   return (

      <DashboardContext.Provider value={{sendComments,sendPost,getComments,getUsers ,users,deletePost,editPost,followUsers }}>

         {children}
      </DashboardContext.Provider>
   );
};
