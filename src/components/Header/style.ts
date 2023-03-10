import styled from "styled-components";
import { mainTheme } from "../../styles/theme";

export const StyledHeaderDash = styled.header`
   background-color: ${mainTheme.colors.gray1};
   position: fixed;
   width: 100%;
   #header__div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      justify-content: space-between;
      /* height: 80px; */
      width: 100%;

      #header____div-left {
         display: flex;
         /* flex-direction: column; */
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
      #header__div-right {
         display: flex;
         flex-direction: column;
         /* align-items: center; */
         gap: 20px;

         #buttons__div {
            display: flex;
            justify-content: space-between;
            /* align-items: center; */
            gap: 25px;
         }
      }

      @media (min-width: 769px) {
         height: 80px;
         flex-direction: row;

         #header____div-left {
            flex-direction: column;
         }

         #header__perfil{
            flex-direction: row;;
         }

         #header__div-right{
            flex-direction: row;
            align-items: center;
         }
      }
   }
`;
