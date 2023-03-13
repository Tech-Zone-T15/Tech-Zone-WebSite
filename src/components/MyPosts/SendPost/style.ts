import styled from "styled-components";

export const DivContainer = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   background-color: #eef3f8;
   border-radius: 5rem;
   border: solid 2px #868e96;
   max-width: 600px;
   width: 100%;
   gap: 1rem;
   padding: 6px;
   @media(min-width: 769px){
      height: 75px;
      padding: 32px;
   }
   img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
   }

   button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-color: transparent;

      p {
         font-size: 1.3rem;
         background-color: transparent;
         color: #868e96;
      }
   }

   :hover {
      background-color: #e9ecef;
   }
`;
