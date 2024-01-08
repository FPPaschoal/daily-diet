import { Icon } from '@components/Icon';
import styled, { css } from 'styled-components/native';

type ContainerProps = {
  type: 'GRAY_5' | 'GREEN_LIGHT' | 'RED_LIGHT';
};

type size = {
  size: 'LG' | 'XXL';
};

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme, type }) => theme.COLORS[type]};
  align-items: center;
  justify-content: center;
  padding: 30px 24px 48px 24px;
  position: relative;
`;

export const Title = styled.Text<size>`
  ${({ theme, size }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE[size]}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-top: -16px;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const BackButton = styled.TouchableOpacity`
  align-self: flex-start;
  padding: 8px;
`;
