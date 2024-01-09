import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  gap: 8px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_4};
    border-radius: 6px;
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    padding: 8px;
  `}
`;
