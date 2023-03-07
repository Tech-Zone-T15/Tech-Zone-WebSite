import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Cube } from '../../components/Cube'
import { DynamicHeader } from '../../components/DynamicHeader'
import { StyledHeader } from '../../components/DynamicHeader/style'
import LoginForm from '../../components/LoginPageComponents/LoginForm'
import RegisterForm from '../../components/RegisterPageComponents/RegisterForm'
import { StyledButton } from '../../styles/button'
import { StyledRegisterPage } from './styles'

function LoginPage() {
   const navigate = useNavigate()
   console.log(window.location.pathname)
  return (
   <StyledRegisterPage>
      <DynamicHeader text1='Login' text2='Início' location1='/login' location2='/'/>
      <section><RegisterForm/></section>
      <section >
         <h1>Junte-se a nossa comunidade agora mesmo e mostre para o mundo todo o seu potencial.</h1>
         <Cube/>
      </section>
      

   </StyledRegisterPage>
  )
}

export default LoginPage