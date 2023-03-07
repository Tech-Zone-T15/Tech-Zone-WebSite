import styled from 'styled-components';
import { mainTheme } from '../../styles/theme';

export const StyledLoginPage = styled.main`

  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  background-color: ${mainTheme.colors.gray2};
  padding: 50px;
 

  section{
   min-width: 300px;
   width: 80%;
   max-width: 480px;
   height: 600px;
   gap: 80px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-bottom: 1px solid ${mainTheme.colors.gray3};
   h1{
      width: 90%;
      min-width: 80%;
      font-weight: 600;
      font-size: 22px;
      line-height: 34px;
      padding: 15px;
   }
   img{
      width: 100%;
      min-width: 80%;
   }
  }

  @media (max-width: 955px)  {
         flex-direction: column
   
  }
  `