import styled, { css } from 'styled-components/native';

type ContainerProps = {
  type: 'GRAY_6' | 'GREEN_LIGHT' | 'RED_LIGHT';
};

type TextDataProps = {
  size: 'XL' | 'XXL';
};

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme, type }) => theme.COLORS[type]};
  padding: 20px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;

export const TextData = styled.Text<TextDataProps>`
  ${({ theme, size }) => css`
    font-size: ${theme.FONT_SIZE[size]}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;
export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `};
  text-align: center;
`;
