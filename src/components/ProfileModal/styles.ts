import styled from "styled-components";

export const ModalProfile = styled.dialog`
   position: fixed;
   background: rgba(51, 51, 51, 0.5);
   border-radius: 8px;
   border-top: 8px solid blue;
   border-bottom: 8px solid blue;
   form {
      background-color: white;
      gap: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }
`;
