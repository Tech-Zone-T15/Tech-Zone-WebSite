import styled from "styled-components";
import { mainTheme } from "../../styles/theme";

export const StyledHeaderDash = styled.header`
   background-color: ${mainTheme.colors.gray1};
   #header__div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      justify-content: space-between;
      margin-left: 15px;
      width: 98%;;
      .menu-btn {
         background-color: transparent;
      }
      .menu-icon {
         font-size: 2rem;
      }

      #header____div-left {
         display: flex;

         align-items: center;
         justify-content: center;
      }
      #header__perfil {
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         gap: 18px;

         div {
            border-radius: 50%;
            overflow: hidden;
            height: 60px;
            width: 60px;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
               width: 90px;
            }
         }
      }

      .header__div-right {
         display: none;
         flex-direction: column;

         gap: 20px;

         .menu-close {
            display: flex;
            width: 100%;
            justify-content: center;
         }

         #buttons__div {
            display: flex;
            justify-content: space-between;
            align-items: center;

            gap: 25px;
            div {
               width: 222px;
               display: flex;
               justify-content: space-around;
            }
         }
      }
      .header__div-right.show {
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: space-between;
         border-top: solid transparent 50px;
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 175px;
         background-color: ${mainTheme.colors.gray1};
      }

      @media (min-width: 955px) {
         height: 80px;
         flex-direction: row;
         .menu-btn {
            display: none;
         }
         #header__div {
            width: 100%;
         }

         #header____div-left {
            flex-direction: column;
         }

         #header__perfil {
            flex-direction: row;
         }

         .header__div-right {
            display: flex;
            flex-direction: row;
            align-items: center;
            .menu-close {
               display: none;
            }
         }
      }
      @media (max-width: 520px) {
         #buttons__div {
            flex-direction: column;
         }
         .header__div-right.show {
            height: 223px;
         }
      }
   }
`;
