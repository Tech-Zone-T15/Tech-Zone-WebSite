import React from "react";
import { Cube } from "../../components/Cube";
import { DynamicHeader } from "../../components/DynamicHeader";
import LoginForm from "../../components/LoginPageComponents/LoginForm";
import { StyledLoginPage } from "./styles";

function LoginPage() {

   return (
      <StyledLoginPage>
         <DynamicHeader
            text1="Cadastro"
            text2="Início"
            location1="/register"
            location2="/"
         />
         <section>
            <img src="../../src/assets/ImgLoginPage.png" alt="" />
            <h1>
               Junte-se a nossa comunidade agora mesmo e mostre para o mundo
               todo o seu potencial!
            </h1>
         </section>
         <section>
            <LoginForm />
         </section>
      </StyledLoginPage>
   );
}

export default LoginPage;
