import { style } from "@mui/system";
import { mainTheme } from "../../styles/theme";
import styled from "styled-components";

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
`;
