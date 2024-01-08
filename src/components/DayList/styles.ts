import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  gap: 8px;
`;

export const Day = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
