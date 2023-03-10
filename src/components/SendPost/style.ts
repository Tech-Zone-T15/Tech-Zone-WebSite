import styled from "styled-components";
import {mainTheme} from '../../styles/theme'

export const DivContainer = styled.div`

border: 1px solid ${mainTheme.colors.gray2};
min-height: 15vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;


img{
   width: 40px;
   height: 49px;
   border-radius: 50%;
}

button{
   height: 50px;
   width: 60%;
   background-color: transparent;
   border-radius: 8px;
   border: 1px solid ${mainTheme.colors.gray2};
}



@media(min-width: 800px){
   width: 50%;
}
`