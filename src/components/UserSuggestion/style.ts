import styled from "styled-components";
import { mainTheme } from '../../styles/theme'

export const UserSuggestionContainer = styled.aside`
   display: flex;
   flex-direction: column;
   align-items: center;
   border: 1px solid ${mainTheme.colors.gray2};
   width: 100%;
   padding: 10px;

   @media (min-width: 800px) {
      width: 30%;
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

   @media (min-width: 800px) {
      flex-direction: column;
      height: auto;
      max-height: 60vh;
      gap: 10px;
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
         width: 60px;
         height: 69px;
      }
   }

   @media (min-width: 800px) {
      flex-direction: row;
      justify-content: space-between;
      width: 90%;
      align-items: center;
   }
`;
