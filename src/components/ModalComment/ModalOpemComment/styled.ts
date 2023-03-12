import styled from "styled-components";

export const ModalContainer = styled.div`
   display: flex;
   flex-direction: column;
   top: 20rem;
   gap: 2rem;
   padding: 1rem;
   background-color: #e3f2fd;
   min-height: 600px;

   @media (min-width: 769px) {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
   }
`;
export const NotCommentsContainer = styled.div`
   width: 300px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   img {
      width: 300px;
   }
   @media (min-width: 769px) {
      width: 600px;
   }
`;
