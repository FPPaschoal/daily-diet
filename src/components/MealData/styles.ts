import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  gap: 12px;
  flex-direction: row;
  padding: 14px 16px 14px 12px;
  align-items: center;
  align-self: stretch;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const MealTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Divider = styled.View`
  width: 1px;
  height: 18px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Meal = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  flex: 1;
`;

export const Status = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.COLORS.RED_MID};
  /* background-color: ${({ theme }) => theme.COLORS.GREEN_MID}; */
`;
