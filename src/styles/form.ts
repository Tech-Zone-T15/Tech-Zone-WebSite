import { TextField } from '@mui/material';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #FCFEFF;
  width: 400px;
  height: 500px;
  border-radius: 4px;
   
  label{
   font-weight: 600;
   font-size: 16px;
   text-align: left;
   width: 90%;
   
}

  span{
   color: red;
   font-weight: bold;
   font-size: small;
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