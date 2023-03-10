import styled from "styled-components";

export const MyPostsStyle = styled.div`
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
`;
