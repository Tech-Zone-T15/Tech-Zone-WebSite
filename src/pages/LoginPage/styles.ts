import styled from 'styled-components';

export const StyledLoginPage = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #E9ECEF;
  padding: 50px;
 

  section{
   width: 49%;
   height: 600px;
   gap: 80px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   span{
      width: 80%;
      font-weight: 600;
      font-size: 22px;
      line-height: 34px;
      padding: 25px;
   }
   img{
      width: 80%;
      min-width: 320px;
   }
  }
  `