import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { DynamicHeader } from '../../components/DynamicHeader'
import { StyledButton, StyledButtonLink, StyledButtonLink2 } from '../../styles/button'
import { StyledContainer } from '../../styles/grid'
import { StyledParagraph, StyledTitle } from '../../styles/typography'
import { StyledMainLanding } from './types'
import ImgLandingPage from "../../assets/ImgLandingPage.svg"


function LandingPage() {

   return (
      <>
         <DynamicHeader text1='Login' text2='Cadastro' location1='/login' location2='/register'/>
         <StyledMainLanding>
            <StyledContainer>
               <div id="contentMain_div">
                  <div id='firstHalf__main'>
                     <div>
                        <img src= {ImgLandingPage} alt="Imagem de abertura"/>
                     </div>
                     <div>
                        <StyledTitle $fontSize='one' tag='h1' >Olá Dev!</StyledTitle>
                        <StyledTitle $fontSize='one' tag='h2'>Bem vindo á <span>Tech Zone</span></StyledTitle>
                        <StyledTitle tag='h6' $fontSize='two'>
                           Somos umas comunidade de desenvolvedores <span>Front end</span>, onde todos podem compartilhar o seu conhecimento 
                           e cada vez mais, contribuir para o crescimento da comunidade.
                        </StyledTitle>
                     </div>
                  </div>
                  <div id='secondHalf__main'>
                     <StyledButtonLink2 to={'/login'} $buttonSize='large' $buttonStyle='blue' >Faça seu login aqui e interaja com sua rede</StyledButtonLink2>
                     <StyledButtonLink2 to={'/register'} $buttonSize='large' $buttonStyle='white'>Ainda não faz parte da TechZone? Cadastre-se agora</StyledButtonLink2>
                  </div>
               </div>
            </StyledContainer>
         </StyledMainLanding>
      </>
   )
}

export default LandingPage