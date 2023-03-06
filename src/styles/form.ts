import { TextField } from '@mui/material';
import styled from 'styled-components';
import { mainTheme } from './theme';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: ${mainTheme.colors.gray1};
  width: 400px;
  height: fit-content;
  min-height: 500px;
  border-radius: 4px;
   
  label{
   font-weight: 600;
   font-size: 16px;
   text-align: left;
   width: 90%;
   
}

  span{
   color: ${mainTheme.colors.red};
   text-align: left;
   width: 90%;
   
  }
  span::before {
    display: inline;
    content: "⚠ ";
  }

  p{
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