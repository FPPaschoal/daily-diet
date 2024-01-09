import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

type ContainerType = 'SOLID' | 'OUTLINE';

export const Container = styled(TouchableOpacity)<{ type: ContainerType }>`
  width: 100%;
  padding: 16px 24px;
  gap: 12px;
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ type, theme }) =>
    type === 'SOLID'
      ? css`
          background-color: ${theme.COLORS.GRAY_2};
        `
      : css`
          border: 2px solid ${theme.COLORS.GRAY_1};
        `}
`;

export const TextContent = styled.Text<{ type: ContainerType }>`
  ${({ type, theme }) =>
    type === 'SOLID'
      ? css`
          color: ${theme.COLORS.WHITE};
        `
      : css`
          color: ${theme.COLORS.GRAY_1};
        `}
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
