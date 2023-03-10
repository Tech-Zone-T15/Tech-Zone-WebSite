import styled from "styled-components";

export const StyledSearchForm = styled.form`
   width: 100%;
   width: 300px;
   height: 55px;

   display: flex;
   align-items: center;
   justify-content: space-between;
   /* gap: 20px; */

   /* padding: 8px; */
   border-radius: 8px;
   border: 2px solid ${({ theme }) => theme.colors.gray2};
   transition: 0.4s;

   background: ${({ theme }) => theme.colors.gray2};

   button {
      height: 100%;
      width: 50px;
      background: ${({ theme }) => theme.colors.gray2};
   }

   input {
      width: 100%;
      font-family: ${({ theme }) => theme.fonts.primary};
      height: 40px;
      background: ${({ theme }) => theme.colors.gray2};
      padding-right: 8px;

      icon {
         width: 100px;
      }
   }

   input:focus {
      outline: none;
   }

   :has(input:focus) {
      border: 2px solid ${({ theme }) => theme.colors.primary};
   }
`;
