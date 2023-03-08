import styled from "styled-components";

export const ModalProfile = styled.dialog`
   max-width: 600px;
   width: 100%;
   border-radius: 8px;
   border-top: 16px solid blue;
   border-bottom: 16px solid blue;
   form {
      padding: 16px;
      background-color: white;
      gap: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      header {
         width: 100%;
         div {
            display: flex;
            justify-content: space-between;
            align-items: center;
         }
      }
   }
   span{
      color: red;
   }
`;
export const ModalBox = styled.div`
   background: rgba(51, 51, 51, 0.5);
   position: fixed;
   z-index: 3;
   width: 100%;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 20px;
`;
