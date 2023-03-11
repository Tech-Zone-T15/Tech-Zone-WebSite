import styled from "styled-components";
import { mainTheme } from "../../styles/theme";

export const StyledRegisterPage = styled.main`
   display: flex;
   align-items: center;
   justify-content: space-around;
   min-height: 100vh;
   height: fit-content;
   background-color: ${mainTheme.colors.gray2};
   padding: 100px;
   margin-top: 80px;

   section {
      min-width: 300px;
      width: 49%;
      max-width: 480px;
      height: auto;
      min-height: 700px;
      gap: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .blink {
         animation: blinker 1s linear infinite;
      }

      @keyframes blinker {
         50% {
            opacity: 0;
         }
      }
      h1 {
         width: 80%;
         height: 155px;
         font-weight: 600;
         font-size: 22px;
         line-height: 34px;
         padding: 15px;
         font-family: "Courier New", Courier, monospace, Times, serif;
      }
      img {
         width: 80%;
         min-width: 320px;
      }
   }

   @media (max-width: 955px) {
      flex-direction: column;
      padding: 20px;
   }
   @media ((max-width: 690px)) {
      .main-title {
         margin-bottom: 40px;
      }
   }
   @media ((max-width: 650px)) {
      .main-title {
         margin-bottom: 70px;
      }
   }
`;
