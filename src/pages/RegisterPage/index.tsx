import React from 'react'
import LoginForm from '../../components/LoginPageComponents/LoginForm'
import RegisterForm from '../../components/RegisterPageComponents/RegisterForm'
import { StyledRegisterPage } from './styles'

function LoginPage() {
  return (
   <StyledRegisterPage>
      <section><RegisterForm/></section>
      <section>
         <h1>Junte-se a nossa comunidade agora mesmo e mostre para o mundo todo o seu potencial.</h1>
         <img src="../../src/assets/imgRegisterPage.png" alt="" />
      </section>
      

   </StyledRegisterPage>
  )
}

export default LoginPage