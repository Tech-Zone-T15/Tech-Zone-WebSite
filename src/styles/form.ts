import { TextField } from '@mui/material';
import styled from 'styled-components';
import { mainTheme } from './theme';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  gap: 25px;
  background-color: ${mainTheme.colors.gray1};
  width: 90%;
  min-width: 300px;
  height: auto;
  border-radius: 4px;
  box-sizing: border-box;
 
  p{
   color: ${mainTheme.colors.red};
   align-self: flex-start;
   margin-bottom: 5px;
   margin-top: 5px;
   
   
  }
  p::before {
    display: inline;
    content: "⚠ ";
  }

  span{
   align-self: center;
   font-weight: 600;
   font-size: 16px;
  } 
`;

export const StyledTextField = styled(TextField)`
  width: 100%;

  input {
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  label {
    &.Mui-focused {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .Mui-focused {
    fieldset {
      border-color: ${({ theme }) => theme.colors.primary}!important;
      outline-color: ${({ theme }) => theme.colors.primary}!important;
    }
  }
`;