import React, { useState } from 'react';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IDefaultProviderProps, ILoginFormValues, IRegisterFormValues, IUser, IUserContext } from './@types';
import { api } from "../../services/api";


export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<IUser | null>(null)
  const navigate = useNavigate()

  const userLoad = () =>{
    const token = localStorage.getItem('@TOKEN')
    if(!token){
      /*navigate('/')*/
    }else{
      navigate('/dashboard')
    }
  }
  
  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true)
      const response = await api.post('/users', formData)
      localStorage.setItem('@TOKEN', response.data.accessToken)
      toast.success("Usuário registrado!")
      setTimeout(() => {
        navigate('/dashboard')
      }, 2000);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
  
      {error.response.data === 'Email already exists' ? toast.error("Email já cadastrado!") : toast.error("Verifique os dados e tente novamente")}
      
    }finally{
      setLoading(false)
    }

  }
  const userLogin = async (formData: ILoginFormValues) => {
    try {
      setLoading(true)
      const response = await api.post('/login', formData)
      localStorage.setItem('@TOKEN', response.data.accessToken)
      localStorage.setItem('@USER', JSON.stringify(response.data.user))
      toast.success("Usuário Logado!")
      setTimeout(() => {
        navigate('/dashboard')
      }, 2000);
    } catch (error) {
      toast.error("Verifique os dados e tente novamente")
    }finally{
      setLoading(false)
    }

  }

  const userLogOut = () => {
    setUser(null)
    localStorage.removeItem('@TOKEN')
    navigate('/')
  }
  return ( 
    <UserContext.Provider 
      value={{
        loading, 
        setLoading, 
        user, 
        userLoad, 
        userLogOut, 
        userLogin, 
        userRegister
      }}
    >
      {children}
    </UserContext.Provider>);
};
