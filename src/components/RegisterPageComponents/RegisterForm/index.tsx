import React, { useContext } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../Providers/UserContext'
import { Registerschema } from './schema'
import { useForm } from 'react-hook-form';
import { IRegisterFormValues } from '../../../Providers/UserContext/@types';

const RegisterForm = () => {

   const {userRegister} = useContext(UserContext)
   const navigate = useNavigate()

   const{
      register, handleSubmit, formState: {errors},
     } = useForm<IRegisterFormValues>({resolver: yupResolver(Registerschema)})
    
     const onSubmit = (formData : IRegisterFormValues) => {
      userRegister(formData)
     }

     return(<form onSubmit={handleSubmit(onSubmit)} noValidate>
     <input type='name' {...register("name")} />
     <input type='email' {...register("email")} />
     <input type='password' {...register("password")} />
     <input type='text'{...register("profile_img")} />
     <input type='number'{...register("age")} />
     <input type='text'{...register("city")} />
     <input type="text" {...register("bio")} />
     <button type='submit' >
       Cadastrar
     </button>
   </form>)
   
   };


export default RegisterForm