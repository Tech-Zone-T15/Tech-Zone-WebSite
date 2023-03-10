import styled from "styled-components";

export const StyledMain = styled.main`
  position: relative;
  top: 20vh;
  background-color: #E9ECEF;
  .seguindo{
   display: flex;
   flex-direction: column;
   overflow-x: scroll;
   margin: 8px;
   ul{
      gap: 8px;
      display: flex;
      flex-direction: row;
      justify-content: center;
   }
  }
`