import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const YesNoCircle = styled.View<{ type: 'y' | 'n' }>`
  ${({ theme, type }) => css`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${type === 'y'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `};
`;

export const YesNoContainer = styled.TouchableOpacity<{
  isSelected: boolean;
  type: 'y' | 'n';
}>`
  ${({ theme, isSelected, type }) => css`
    background-color: ${isSelected
      ? type === 'y'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
    border: ${isSelected
      ? '1px solid ' +
        (type === 'y' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK)
      : 'none'};
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  flex: 1;
  border-radius: 6px;
  padding: 16px;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;
