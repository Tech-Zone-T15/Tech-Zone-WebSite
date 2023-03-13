import styled from "styled-components";

export const MyPostsStyle = styled.div`
   display: flex;
   flex-direction: column;
   border-radius: 6px;
   margin: 6px;
   margin-top: 32px;
   padding: 16px;
   border: 1px solid gray;
   h5{
      margin-bottom: 16px;
   }
   img{
      max-width: 100%;
   }
   ul{
      display: flex;
   flex-direction: column;
      li{
         margin-bottom: 16px;
         border: 1px solid gray;
         border-radius: 6px;
      }
   }
   @media(min-width: 769px){
      min-width: 70vw;
      justify-content: center;
      ul{
         min-width: 70%;
         overflow-x: initial;
         padding: 5%;
      }
      h5{
         font-size: 64px;
         text-align: center
      }
      img{
         width: 70%;
      }
   }
`;
