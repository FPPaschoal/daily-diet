import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 20px 20px 0 0;
  margin-top: -20px;
  width: 100%;
  padding: 24px;
  gap: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  align-self: center;
  margin: 16px;
`;

export const Content2 = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const Test = styled.View`
  background-color: black;
  flex: 1;
  height: 100px;
`;
