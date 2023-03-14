import styled from "styled-components";
import { mainTheme } from "../../styles/theme";

export const UserSuggestionContainer = styled.aside`
   display: flex;
   flex-direction: column;
   align-items: center;
   border: 1px solid ${mainTheme.colors.gray2};
   width: 100%;
   min-height: auto;

   h2 {
      font-size: 1.3rem;
   }

   .container {
      display: flex;
      width: 300px;
      background-color: #ffffff;
      border-radius: 8px;
      padding: 10px;
      flex-direction: column;
      align-items: center;

      @media (min-width: 600px) {
         width: 600px;
      }

      @media (min-width: 800px) {
         width: 350px;
      }
   }

   @media (min-width: 800px) {
      position: sticky;
      top: 0;

      .container {
         gap: 20px;
      }
   }
`;

export const ListSuggestions = styled.ul`
   width: 100%;
   max-width: 100%;
   height: 22vh;
   overflow-x: auto;
   display: flex;
   justify-content: flex-start;
   align-items: center;

   ::-webkit-scrollbar {
      height: 8px;
   }
   ::-webkit-scrollbar-thumb {
      background-color: ${mainTheme.colors.primary};
      width: 5px;
   }

   @media (min-width: 800px) {
      flex-direction: column;
      min-height: 35vh;
      gap: 30px;
      overflow-y: hidden;
   }
`;

export const CardUserSuggestion = styled.li`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   min-width: 250px;
   gap: 10px;

   .div-user {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      img {
         object-fit: cover;
         width: 3.5rem;
         height: 3.5rem;
         border-radius: 100%;
         overflow: clip;
      }
   }

   @media (min-width: 800px) {
      flex-direction: row;
      justify-content: space-between;
      width: 90%;
      align-items: center;
   }
`;
