import React, { useContext, useEffect } from "react";
import { Cube } from "../../components/Cube";
import { DynamicHeader } from "../../components/DynamicHeader";
import LoginForm from "../../components/LoginPageComponents/LoginForm";
import { UserContext } from "../../Providers/UserContext";
import { StyledLoginPage } from "./styles";

function LoginPage() {
   const { typeWritter } = useContext(UserContext);
   useEffect(() => {
      const h1Element = document.querySelector(".main-title") as HTMLElement;
      typeWritter(
         h1Element,
         "Junte-se a nossa comunidade agora mesmo e mostre para o mundo todo o seu potencial!"
      );
   }, []);

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
            <h1 className="main-title"></h1>
         </section>
         <section>
            <LoginForm />
         </section>
      </StyledLoginPage>
   );
}

export default LoginPage;
