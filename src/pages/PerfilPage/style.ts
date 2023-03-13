import styled from "styled-components";

export const StyledMain = styled.main`
   position: relative;
   top: 20vh;
   background-color: #e9ecef;
   .open-edit {
      text-align: center;
      margin: 6px;
      border: 1px solid gray;
      border-radius: 8px;
      padding: 16px;
   }
   .following-box,
   .followers-box {
      display: flex;
      flex-direction: column;
      margin: 6px;
      margin-top: 32px;
      border: 1px solid gray;
      border-radius: 8px;
      padding: 16px;
   }
   ul {
      gap: 8px;
      display: flex;
      flex-direction: row;
      overflow-x: scroll;
   }
   #edit:hover {
      cursor: pointer;
      color: blue;
      transform: scale(1.1, 1.1);
   }

   @media (min-width: 769px) {
      .main-container {
         display: flex;
         flex-direction: row-reverse;
         justify-content: space-evenly;
      }
      .followers-list > ul, .following-list > ul{
         display: block;
         max-height: 40vh;
         width: 20vw;;
      }
   }
`;
