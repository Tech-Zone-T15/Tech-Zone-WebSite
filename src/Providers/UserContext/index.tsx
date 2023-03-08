import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
   IDefaultProviderProps,
   ILoginFormValues,
   IRegisterFormValues,
   IUser,
   IUserContext,
   IUserID,
} from "./@types";
import { api } from "../../services/api";
import jwt_decode from "jwt-decode";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
   const [loading, setLoading] = useState(false);
   const [user, setUser] = useState<IUser | null>(null);
   const navigate = useNavigate();
   const token = localStorage.getItem("@TOKEN");

   //   const userLoad = () =>{
   //     if(!token){
   //        navigate('/')
   //       }else{
   //          navigate('/dashboard')
   //       }
   //    }

   useEffect(() => {
      if (token) {
         const autoLogin = async () => {
            const userID = jwt_decode<IUserID>(token);
            try {
               const response = await api.get(`users/${userID.sub}`, {
                  headers: {
                     Authorization: `Bearer ${token}`,
                  },
               });
               setUser(response.data);
               navigate("/dashboard");
            } catch (error) {
               console.error(error);
               localStorage.removeItem("TOKEN")
               navigate("/");

            }
         };
         autoLogin();
      }
   }, [token]);

   const userRegister = async (formData: IRegisterFormValues) => {
      try {
         setLoading(true);
         const response = await api.post("/users", formData);
         localStorage.setItem("@TOKEN", response.data.accessToken);
         toast.success("Usuário registrado!");
         // setTimeout(() => {
         navigate("/dashboard");
         // }, 2000);
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
         // setLoading(false);
         {
            error.response.data === "Email already exists"
               ? toast.error("Email já cadastrado!")
               : toast.error("Verifique os dados e tente novamente");
         }
      } finally {
         setLoading(false);
      }
   };
   const userLogin = async (formData: ILoginFormValues) => {
      try {
         setLoading(true);
         const response = await api.post("/login", formData);
         localStorage.setItem("@TOKEN", response.data.accessToken);
         // console.log(localStorage);
         toast.success("Usuário Logado!");
         // setTimeout(() => {
         navigate("/dashboard");
         // }, 2000);
      } catch (error) {
         toast.error("Verifique os dados e tente novamente");
      } finally {
         setLoading(false);
      }
   };

   const userLogOut = () => {
      setUser(null);
      localStorage.removeItem("@TOKEN");
      navigate("/");
   };

   const typeWritter = (title: HTMLElement, content: string) => {
      let currentText = "";
      const charArray = content.split("");
      const h1Element = document.querySelector(".main-title") as HTMLElement;

      charArray.forEach((letra: string, i: number) => {
         setTimeout(() => {
            currentText += letra;
            title.textContent = currentText;

            // adiciona a barra logo após a letra atual
            const bar = document.createElement("span");
            bar.textContent = "|";
            bar.classList.add("blink");
            h1Element.appendChild(bar);
         }, 40 * i);
      });
   };
   
   return (
      <UserContext.Provider
         value={{
            loading,
            setLoading,
            user,
            //   userLoad,
            userLogOut,
            userLogin,
            userRegister,
            typeWritter,
            setUser
         }}
      >
         {children}
      </UserContext.Provider>
   );
};
