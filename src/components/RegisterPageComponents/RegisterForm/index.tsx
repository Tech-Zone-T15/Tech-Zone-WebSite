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
      <label htmlFor="name">Nome completo</label>
     <StyledInput id='name' {...register("name")} placeholder="  Nome" />
     <label htmlFor="email">Seu Email</label>
     <StyledInput type='email' id='email' {...register("email")} placeholder="  Email" />
     <label htmlFor="password">Sua senha</label>
     <StyledInput type='password' id='password' {...register("password")} placeholder="  Senha"/>
     <label htmlFor="profile_img">Sua foto de perfil</label>
     <StyledInput type='text' id='profile_img'{...register("profile_img")} placeholder="  Link da imagem (opcional)" />
     <label htmlFor="age">Sua idade</label>
     <StyledInput type='number'id='age'  {...register("age")} placeholder="  Idade"/>
     <label htmlFor="city">Sua cidade</label>
     <StyledInput type='text' id='city' {...register("city")} placeholder="  Cidade"/>
     <label htmlFor="bio">Conte um pouco sobre você</label>
     <StyledInput type="text" id='bio' {...register("bio")} placeholder="  Sua bio (mín. 20 caracteres"/>
     <StyledButton type='submit' $buttonSize='large' $buttonStyle='blue' >
       Cadastrar
     </StyledButton>
   </StyledForm>)
   
   };


export default RegisterForm