import styled from "styled-components";

export const CapaStyle = styled.div`
   border: 2px solid black;
   .image-box{
      display: inline-flex;
      position: relative;
      button{
         position: absolute;
         bottom: 30px;
         right: 30px;
         background-color: transparent;
      }
   }
   .foto-capa {
      width: 100vw;
   }
   .foto-perfil{
      width: 200px;
      height: 200px;
      border-radius: 50%;
      left: 0;
      top: 10;
      object-fit: cover;
      margin-top: -75px;
   }
`;
