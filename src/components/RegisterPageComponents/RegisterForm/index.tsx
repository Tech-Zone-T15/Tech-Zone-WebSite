import React, { useContext } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../Providers/UserContext'
import { Registerschema } from './schema'
import { useForm } from 'react-hook-form';
import { IRegisterFormValues } from '../../../Providers/UserContext/@types';
import { StyledInput } from '../../../styles/input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { TextField } from '@mui/material';
import { ErrorMessage } from '@hookform/error-message';

const RegisterForm = () => {

   const {userRegister} = useContext(UserContext)
   const navigate = useNavigate()

   const{
      register, handleSubmit, formState: {errors},
     } = useForm<IRegisterFormValues>({resolver: yupResolver(Registerschema)})
    
     const onSubmit = (formData : IRegisterFormValues) => {
      userRegister(formData)
     }

     return(<StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
      

      
      <h2>Cadastre-se</h2>
     <ErrorMessage  errors={errors} name="name" as="p"/>
     <TextField fullWidth id='name' {...register("name")} label="Nome" />
     <ErrorMessage  errors={errors} name="email" as="p"/>
     <TextField fullWidth type='email' id='email' {...register("email")} label="Email" />
     <ErrorMessage  errors={errors} name="password" as="p"/>
     <TextField fullWidth type='password' id='password' {...register("password")} label="Senha"/>
     <ErrorMessage  errors={errors} name="profile_img" as="p"/>
     <TextField fullWidth type='text' id='profile_img'{...register("profile_img")} label="Link da imagem (opcional)" />
     <ErrorMessage  errors={errors} name="age" as="p"/>
     <TextField fullWidth type='number'id='age'  {...register("age")} label="Idade"/>
     <ErrorMessage  errors={errors} name="city" as="p"/>
     <TextField fullWidth type='text' id='city' {...register("city")} label="Cidade"/>
     <ErrorMessage  errors={errors} name="bio" as="p"/>
     <TextField fullWidth type="text" id='bio' {...register("bio")} label="Sua bio (mín. 20 caracteres"/>
     <StyledButton type='submit' $buttonSize='large' $buttonStyle='blue' >
       Cadastrar
     </StyledButton>
     
   </StyledForm>)
   
   };


export default RegisterForm