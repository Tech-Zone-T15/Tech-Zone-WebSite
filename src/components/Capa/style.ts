import styled from "styled-components";

export const CapaStyle = styled.div`
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
      margin: 1rem;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      margin-top: -50%;
   }
`;
