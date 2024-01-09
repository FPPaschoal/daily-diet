import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  align-items: center;
  justify-content: center;
  padding: 0 15%;
`;

export const Title = styled.Text<{ type: 'negative' | 'positive' }>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'positive'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `};
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
  margin-top: 8px;
`;

export const StrongSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Img = styled.Image`
  margin-top: 40px;
  margin-bottom: 32px;
`;
