import styled from "styled-components";
import { mainTheme } from "../../styles/theme";

export const DivContainer = styled.div`
   border: 1px solid ${mainTheme.colors.gray2};
   min-height: 10vh;
   min-width: 300px;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 20px;
   border-radius: 4px;
   background-color: #fff;

   img {
      object-fit: cover;
      width: 55px;
      height: 55px;
      border-radius: 100%;
      overflow: clip;
      margin: 10px;
      background-repeat: no-repeat;
        background-position: center center;
   }
    

   button {
      height: 50px;
      width: 60%;
      background-color: transparent;
      border-radius: 8px;
      border: 1px solid ${mainTheme.colors.gray2};
      color: ${mainTheme.colors.gray3};
      font-size: 1rem;
   }

   @media (min-width: 600px) {
      min-width: 600px;
   }

   @media (min-width: 800px) {
      min-width: 100%;
   }
`;
