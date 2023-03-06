import { createContext,useState,useEffect } from "react";
import { api } from "../../services/api";
import {IDefaultProviderProps,IDashboardContext,Ipost,IComments,IsendPost,IsendComments} from "./@types/dashboardTypes";

export const DashboardContext = createContext({} as IDashboardContext);


export const DashboardProvider = ({ children }: IDefaultProviderProps) => {

   const [post,setPost] = useState<Ipost[]>([])

   const token = localStorage.getItem(""); // Esta faltando o localStorage do token

   const getPosts = async () => { // requisição para renderizar os post 
      
      try {
         const response = await api.get<Ipost>("posts", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         
      } catch (error) {
         console.error(error)
      }
   };

   useEffect(() => { //Renderizar os produtos a cada atualização da pagina 
      //getPosts(); 
   }, []);

   
   const getComments = async () => { // requisição para renderizar os Comentarios
      
      try {
         const response = await api.get<IComments>("comments", {
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
            const response = await api.post<Ipost>("post",data,{
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
         const response = await api.post<IComments>("comments",data,{
            headers:{
               Authorization: `Bearer ${token}`,
            }
         })

      } catch (error) {
         console.error(error)
      }
   }

   return (
      <DashboardContext.Provider value={{sendComments,sendPost,getComments,getPosts,post}}>
         {children}
      </DashboardContext.Provider>
   );
};
