import styled from "styled-components";
import { mainTheme } from "../../styles/theme";

export const StyledHeaderDash = styled.header`
   background-color: ${mainTheme.colors.gray1};

   #header{
      display: flex;
      justify-content: center;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      width: 100%;
      
      #header____div-left{
         display: flex;
         align-items: center;
         justify-content: center;
      }
      #header__perfil{
         display: flex;
         align-items: center;
         justify-content: center;
         gap: 18px;
         
         div{
            border-radius: 50%;
            overflow: hidden;
            height: 60px;
            width: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            
            img{
               width: 90px;
            }
         }
      }
      #header__div-right{
         display: flex;
         
         gap: 33px;
         #buttons__div{
            display: flex;
            gap: 25px;
         }
      }
   }
`