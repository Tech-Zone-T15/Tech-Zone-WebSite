import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cube } from "../../components/Cube";
import { DynamicHeader } from "../../components/DynamicHeader";
import { StyledHeader } from "../../components/DynamicHeader/style";
import LoginForm from "../../components/LoginPageComponents/LoginForm";
import RegisterForm from "../../components/RegisterPageComponents/RegisterForm";
import { UserContext } from "../../Providers/UserContext";
import { StyledButton } from "../../styles/button";
import { StyledRegisterPage } from "./styles";

function LoginPage() {
   const { typeWritter } = useContext(UserContext);

   useEffect(() => {
      const h1Element = document.querySelector(".main-title") as HTMLElement;
      typeWritter(
         h1Element,
         "Junte-se a nossa comunidade agora mesmo e mostre para o mundo todo o seu potencial."
      );
   }, []);

   return (
      <StyledRegisterPage>
         <DynamicHeader
            text1="Login"
            text2="Início"
            location1="/login"
            location2="/"
         />
         <section>
            <RegisterForm />
         </section>
         <section>
            <h1 className="main-title"></h1>
            <Cube />
         </section>
      </StyledRegisterPage>
   );
}

export default LoginPage;
