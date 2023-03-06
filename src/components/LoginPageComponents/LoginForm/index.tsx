import React, { useContext } from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from '../../../Providers/UserContext'
import { ILoginFormValues } from './@types'
import { Loginschema } from './schema'
import { useForm } from 'react-hook-form';



const LoginForm = () => {
  const {userLogin} = useContext(UserContext)

  const{
    register, handleSubmit, formState: {errors},
   } = useForm<ILoginFormValues>({
    resolver: yupResolver(Loginschema)
   })
  
   const onSubmit = (formData: ILoginFormValues) => {
    userLogin(formData)
   }
   return ( <form onSubmit={handleSubmit(onSubmit)} noValidate>
   <input type='email'  {...register("email")} />
   <input type='password'   {...register("password")}  />
   <button>
     Entrar
   </button>
 </form>
)
}

export default LoginForm