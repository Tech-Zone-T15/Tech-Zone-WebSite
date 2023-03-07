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
} from "./@types/dashboardTypes";

export const DashboardContext = createContext({} as IDashboardContext);

// const [post,setPost] = useState<Ipost[]>([])

export const DashboardProvider = ({ children }: IDefaultProviderProps) => {
   const [followUsers, setFollowUsers] = useState<Iusers[]>([]);

   const token = localStorage.getItem("@TOKEN"); // Esta faltando o localStorage do token

   const getPosts = async () => {
      // requisição para renderizar os post

      try {
         const response = await api.get<Ipost>("posts", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      //Renderizar os produtos a cada atualização da pagina
      //getPosts();
   }, []);

   const getComments = async () => {
      // requisição para renderizar os Comentarios

      try {
         const response = await api.get<IComments>("comments", {
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

   return (
      <DashboardContext.Provider
         value={{ sendComments, sendPost, getComments, getPosts, followUsers }}
      >
         {children}
      </DashboardContext.Provider>
   );
};
