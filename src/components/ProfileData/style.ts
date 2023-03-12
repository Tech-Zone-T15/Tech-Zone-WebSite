import styled from "styled-components";

export const ProfileDataStyle = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8px;
   border-radius: 6px;
   margin: 6px;
   padding: 16px;
   border: 1px solid gray;
   div{
      display: flex;
      justify-content: space-around;
      align-items: center;
   }
   button{
      align-self: flex-end;
   }
   #cancel-edit:hover{
      cursor: pointer;
      color: red;
      transform: scale(1.1, 1.1);
   }
   #open-edit-modal-icon:hover{
      cursor: pointer;
      color: blue;
      transform: scale(1.2, 1.2);
   }
`