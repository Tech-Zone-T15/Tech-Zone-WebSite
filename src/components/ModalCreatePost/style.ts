import styled from "styled-components";
import { mainTheme } from "../../styles/theme";

export const ModalContainer = styled.div`
   width: 100%;
   height: 100vh;
   position: fixed;
   z-index: 2;
   top: 0;
   background-color: rgba(0, 0, 0, 0.3);
   display: flex;
   justify-content: center;
   align-items: center;

   @media (min-width: 750px) {
      right: 0;
   }
`;

export const Modal = styled.section`
   background-color: #fff;
   width: 90%;
   min-height: 40vh;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   gap: 20px;
   border-radius: 8px;

   .div-btn {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      padding: 20px 0;

      button {
         width: 60%;
         height: 35px;
         border-radius: 8px;
         background-color: ${mainTheme.colors.primary};
         color: ${mainTheme.colors.white};

         :hover {
            background-color: #000;
            transform: scale(1.05);
            transition: 0.3s;
         }
      }
   }

   @media (min-width: 800px) {
      width: 40%;
   }
`;

export const HeaderModal = styled.div`
   display: flex;
   justify-content: space-between;
   background-color: ${mainTheme.colors.primary};
   padding: 0 20px;
   height: 5vh;
   align-items: center;
   border-radius: 4px;

   h2 {
      color: ${mainTheme.colors.white};
      font-size: 1.2rem;
   }

   button {
      background-color: transparent;
      color: ${mainTheme.colors.white};
      font-size: 1.1rem;

      :hover {
         color: #000;
         transform: scale(1.3);
         transition: 0.3s;
      }
   }
`;

export const ModalContent = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   gap: 20px;

   .div-title {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 20px;
      justify-content: flex-start;

      img {
         object-fit: cover;
         width: 3rem;
         height: 3rem;
         border-radius: 100%;
         overflow: clip;
         margin: 10px;
      background-repeat: no-repeat;
        background-position: center center;
      }
   }

   textarea {
      width: 90%;
      min-height: 15vh;
      font-size: 1.1rem;
      border: 1px solid ${mainTheme.colors.gray2};
      outline: none;
      padding: 0 10px;
   }
`;
