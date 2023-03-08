import styled from "styled-components";
import { mainTheme } from "../../styles/theme";

export const StyledMainLanding = styled.main`
   padding-top: 80px;
   width: 100%;
   height: 90vh;
   margin: auto;
   display: flex;
   justify-content: center;
   align-items: center;


   #contentMain_div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      width: 100%;
      height: 100%;
   }

   #firstHalf__main {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
      

      span {
         color: ${mainTheme.colors.primary};
      }

      div {
         width: 100%;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         margin-bottom: 20px;
         gap: 20px;

         img {
            width: 100%;
         }
      }
      h1 {
         text-align: center;
      }
      h2 {
         text-align: center;
      }
      h6 {
         text-align: center;
      }

      @media (min-width: 769px){
         flex-direction: row-reverse;
         margin-top: 40px;
         gap: 40px;
      };
   }

   #secondHalf__main {
      display: flex;
      flex-direction: column;
      gap: 65px;
      max-width: 290px;
      text-align: center;

      @media (min-width: 769px){
         flex-direction: row;
         /* margin-top: 40px; */
         gap: 40px;
         align-items: center;
         justify-content: center;
         margin: auto;
      };
   }
`;
