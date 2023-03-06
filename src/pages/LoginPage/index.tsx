import React from 'react'
import LoginForm from '../../components/LoginPageComponents/LoginForm'
import { StyledLoginPage } from './styles'

function LoginPage() {
  return (
   <StyledLoginPage>
      <section>
         <h1>Junte-se a nossa comunidade agora mesmo e mostre para o mundo todo o seu potencial.</h1>
         <img src="../../src/assets/ImgLoginPage.png" alt="" />
      </section>
      <section><LoginForm/></section>
      

   </StyledLoginPage>
  )
}

export default LoginPage