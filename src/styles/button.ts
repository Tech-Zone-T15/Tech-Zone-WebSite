import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  $buttonSize: 'small' | 'medium' | 'large';
  $buttonStyle: 'blue' | 'white' | 'red';
}

export const StyledButtonCSS = css<IStyledButtonProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  font-size: 1rem;

  height: 48px;
  padding: 0 20px;

  border-radius: 8px;

  transition: 0.4s;

  ${({ $buttonSize }) => {
    switch ($buttonSize) {
      case 'small':
        return css`
        width: 80px;
        `;
      case 'medium':
        return css`
        width: 130px;
        `;
      case 'large':
        return css`
        min-width: 250px;
        width: 100%;
        `;
      default:
        return css`
        width: 320px;
    `;
    }
  }}

  ${({ theme, $buttonStyle }) => {
    switch ($buttonStyle) {
      case 'blue':
        return css`
          color: ${theme.colors.gray1};
          background: ${theme.colors.primary};
          &:hover {
            background: ${theme.colors.primary2};
          }
        `;
      case 'white':
        return css`
          color: ${theme.colors.primary2};
          background: ${theme.colors.gray1};
          border: 1px solid ${theme.colors.primary2};
          &:hover {
            color: ${theme.colors.gray1};
            background: ${theme.colors.primary};
          }
        `;
      case 'red':
        return css`
          color: ${theme.colors.red};
          background: ${theme.colors.gray1};
          border: 1 px solid ${theme.colors.red};
          &:hover {
            color: ${theme.colors.gray1};
            background: ${theme.colors.red};
          }
        `;
        default:
          return css`
          color: ${theme.colors.gray1};
          background: ${theme.colors.primary};
          &:hover {
            background: ${theme.colors.primary2};
          }
        `;
    }
  }}
`;

export const StyledButton = styled.button<IStyledButtonProps>`
  ${StyledButtonCSS}
`;

export const StyledButtonLink = styled(Link)`
  ${StyledButtonCSS}
`;
