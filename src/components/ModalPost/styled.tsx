import styled from 'styled-components';

export const StyledCartModalBox = styled.div`
   position: fixed;
   display: flex;
   align-items: center;
   justify-content: center;

   width: 100%;
   height: 100vh;

   background: rgba(51, 51, 51, 0.5);
   z-index: 1001;

   dialog {
      width: 100%;
      max-width: 500px;
      background: ${({ theme }) => theme.colors.white};


      .cartBox {
         display: flex;
         flex-direction: column;
         gap: 20px;
         padding: 20px;

         @media (max-width: 450px) {
            padding: 15px;
         }
      }
   }
`;