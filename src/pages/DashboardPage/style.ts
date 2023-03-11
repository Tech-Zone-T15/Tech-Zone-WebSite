import { mainTheme } from "../../styles/theme";
import styled from "styled-components";

export const DashboarContainer = styled.div`
background-color: #e9ecef;
height: 100vh;
@media (min-width: 769px) {
   
}
`


export const NavBar = styled.nav`
   background-color: ${mainTheme.colors.primary};
   height: auto;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;

   div {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      width: 60%;

      button {
         background-color: transparent;
         color: ${mainTheme.colors.white};
         font-size: 1.1rem;
      }
   }

   @media (min-width: 800px) {
      min-height: 5vh;

      div {
         width: auto;
         gap: 50px;
      }
   }

   
   `

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
top: 20rem;
gap: 2rem;
max-width: 1200px;
width: 100%;
padding: 1rem;



@media (min-width: 769px) {
   max-width: 1200px;
   width: 100%;
   margin: 0 auto;
   flex-direction: row-reverse;
   justify-content: space-between;
}
`

export const Main = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;

`
export const BackGrondColor = styled.div`
height: fit-content;
background-color: #e9ecef;
`

export const ReversePost = styled.div`
display: flex;
flex-direction: column-reverse;
align-items: center;
gap: 1rem;
`

