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
   <label htmlFor="email">Email</label>
   <StyledInput id='email'  {...register("email")} placeholder="   Digite seu Email aqui" />
   <ErrorMessage errors={errors} name="email" as="span" />
   <label htmlFor="password">Senha</label>
   <StyledInput id='password' type="password"   {...register("password") } placeholder="   Digite sua Senha aqui"  />
   <ErrorMessage errors={errors} name="password" as="span" />
   <StyledButton id='btn' type='submit' $buttonSize='large' $buttonStyle='blue'> 
     Login
   </StyledButton>
   <p>Ainda não possui cadastro?</p>
   <StyledButton id='btn' type='button' $buttonSize='large' $buttonStyle='white' onClick={()=> {navigate("/register")}}>
   Cadastrar
   </StyledButton>
 </StyledForm>
)
}

export default LoginForm