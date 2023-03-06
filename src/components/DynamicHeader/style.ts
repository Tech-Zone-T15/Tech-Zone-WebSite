import styled from "styled-components";
import { mainTheme } from "../../styles/theme";

export const StyledHeader = styled.header`
position: fixed;
display: flex;
align-items: center;
justify-content: space-around;
top: 0;
height: 80px;
width: 110%;
z-index: 2;
box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
background-color: ${mainTheme.colors.gray1};
padding-left: 100px;
padding-right: 50px;


div{
   display: flex;
   height: 100%;
   width: 70%;
   align-items: center;
   
}
`