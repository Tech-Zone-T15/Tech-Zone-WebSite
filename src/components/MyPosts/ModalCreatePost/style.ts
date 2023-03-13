import styled from "styled-components";

export const ModalContainer = styled.div`
   width: 100%;
   height: 100vh;
   position: fixed;
   z-index: 2;
   top: 0;
   background-color: rgba(0, 0, 0, 0.5);
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Modal = styled.section`
   background-color: #fff;
   width: 90%;
   height: 50vh;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   gap: 40px;
`;

export const HeaderModal = styled.div`
   display: flex;
   flex-direction: column;

   .tagsAndBtn {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;

      select {
         width: 50%;
      }
   }
`;

export const ModalContent = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;

   .div-title {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 10px;
      justify-content: flex-start;
      gap: 10px;

      img {
         width: 40px;
         height: 49px;
         border-radius: 50%;
      }
   }

   textarea {
      width: 90%;
      min-height: 20vh;
   }
`;
