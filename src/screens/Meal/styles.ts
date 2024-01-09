import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 20px 20px 0 0;
  margin-top: -20px;
  width: 100%;
  padding: 24px;
  justify-content: space-between;
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const DayTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-top: 12px;
`;
export const MealDayTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const StatusText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    background-color: ${theme.COLORS.GRAY_6};
    align-self: flex-start;
    border-radius: 100px;
    padding: 8px 16px;
  `}
  margin-top: 12px;
`;

export const StatusPoint = styled.Text<{ type: 'SUCCESS' | 'WARNING' }>`
  ${({ theme, type }) => css`
    color: ${type === 'SUCCESS'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;
