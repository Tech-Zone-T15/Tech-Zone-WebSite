import styled from "styled-components";


export const StyledLi = styled.li`
   #follow-btn:hover{
      cursor: pointer;
      color: blue;
   }
   #unfollow-btn:hover{
      cursor: pointer;
      color: red;
   }
   span{
      font-size: 16px;
   }
   @media(min-width: 769px){
      #div-li{
         min-width: 100%;
         margin-bottom: 16px;
      }
   }
   @media(min-width: 1920px){
      span{
         font-size: 32px
      }
   }
`
export const UnfollowButtonStyled = styled.button`
   margin: 8px;
   padding: 2px;
   border-radius: 6px;
   background-color: transparent;
`
