import React, { useContext } from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from '../../../Providers/UserContext'
import { ErrorMessage } from "@hookform/error-message";
import { Loginschema } from './schema'
import { useForm } from 'react-hook-form';
import { ILoginFormValues } from '../../../Providers/UserContext/@types';
import { StyledForm } from '../../../styles/form';
import { StyledInput } from '../../../styles/input';
import { StyledButton } from '../../../styles/button';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';



const LoginForm = () => {
  const {userLogin} = useContext(UserContext)
   const navigate = useNavigate()
  const{
    register, handleSubmit, formState: {errors},
   } = useForm<ILoginFormValues>({
    resolver: yupResolver(Loginschema)
   })
  
   const onSubmit = (formData: ILoginFormValues) => {
    userLogin(formData)
   }
   return ( <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
      
      <h2>Login</h2>
   
   <TextField fullWidth  id="email" label="Digite seu Email aqui" variant="filled" {...register("email")} />
   
   <ErrorMessage errors={errors} name="email" as="p" />
   
   <TextField fullWidth id='password' label="Digite sua Senha aqui" variant='filled'   {...register("password") }   />
   <ErrorMessage errors={errors} name="password" as="p" />
   <StyledButton  type='submit' $buttonSize='large' $buttonStyle='blue'> 
     Login
   </StyledButton>
   <span>Ainda não possui cadastro?</span>
   <StyledButton  type='button' $buttonSize='large' $buttonStyle='white' onClick={()=> {navigate("/register")}}>
   Cadastrar
   </StyledButton>
   
 </StyledForm>
)
}

export default LoginForm