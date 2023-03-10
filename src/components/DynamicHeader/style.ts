import styled from "styled-components";
import { mainTheme } from "../../styles/theme";

export const StyledHeader = styled.header`
   position: fixed;
   display: flex;
   align-items: center;
   justify-content: space-around;
   top: 0;
   height: 80px;
   width: 100%;
   z-index: 2;
   box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
   background-color: ${mainTheme.colors.gray1};
   padding-left: 15px;
   padding-right: 30px;

   div {
      display: flex;
      height: 100%;
      width: 50%;
      align-items: center;
   }
   .menu-btn {
      display: none;
      background: none;
      border: none;
      padding: 0;
      margin-right: 10px;
   }

   .menu-icon {
      font-size: 2rem;
   }
   .menu-close {
      display: none;
   }
   .menu-items {
      display: flex;
      width: 100%;
      justify-content: right;
   }

   @media (max-width: 955px) {
      padding-left: 50px;
      .menu-close {
         display: flex;
         justify-content: center;
         align-items: baseline;
         font-weight: bolder;
         font-size: larger;
         position: absolute;
         top: 85px;
         left: -40px;
         width: 100%;
         height: 30px;
         background-color: ${mainTheme.colors.gray1};
         border-bottom: 1px solid ${mainTheme.colors.gray3};
         div {
         }
      }
      .menu-items {
         background-color: ${mainTheme.colors.gray1};
         height: 85px;
         width: 100%;
         padding: 10px;
         position: fixed;
         left: 40px;
         top: -5px;
         display: none;
      }

      .menu-btn {
         display: block;
      }

      .menu-items.show {
         display: flex;
         width: 100%;
         justify-content: center;
         align-items: center;
         flex-direction: column;
         position: fixed;
         top: -5px;
      }
   }
`;
