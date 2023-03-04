import styled, { css } from 'styled-components';
import BaseTitle from './components/BaseTitle';

interface IStyledTitleProps {
  $fontSize: 'one' | 'two' | 'three' | 'four' | 'five' | 'button';
  textAlign?: 'center' | 'left' | 'right';
}

interface IStyledParagraphProps {
  fontColor?: 'black' | 'red';
  textAlign?: 'center' | 'left' | 'right';
}

export const StyledTitle = styled(BaseTitle)<IStyledTitleProps>`
  width: 100%;

  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1.6;

  text-align: ${({ textAlign }) => textAlign};

  ${({ $fontSize }) => {
    switch ($fontSize) {
      case 'one':
        return css`
          font-size: 1.875rem;
          font-weight: 700;
        `;
      case 'two':
        return css`
          font-size: 1.375rem;
          font-weight: 700;
        `;

      case 'three':
        return css`
          font-size: 1rem;
          font-weight: 700;
        `;

      case 'four':
        return css`
          font-size: 0.75rem;
          font-weight: 700;
        `;
      case 'five':
        return css`
          font-size: 0.75rem;
          font-weight: 400;
        `;
      case 'button':
        return css`
          font-size: 0.75rem;
          font-weight: 400;
        `;
        default:
          return css`
          font-size: 1.55rem;
          font-weight: 700;
        `;
    }
  }}
`;

export const StyledParagraph = styled.p<IStyledParagraphProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.8;

  text-align: ${({ textAlign }) => textAlign};

  ${({ fontColor, theme }) => {
    switch (fontColor) {
      case 'black':
        return css`
          color: ${theme.colors.gray4};
        `;
      case 'red':
        return css`
          color: ${theme.colors.feedback.negative};
        `;
        default:
          return css`
            color: ${theme.colors.gray4};
          `;
    }
  }}

  strong {
    font-weight: 600;
  }
`;

export const StyledCaption = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.75rem;
  font-weight: 400;
`;