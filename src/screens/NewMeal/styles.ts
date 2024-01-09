import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  flex: 1;
  border-radius: 20px 20px 0 0;
  margin-top: -20px;
  padding: 24px;
  gap: 12px;
`;
