import { Icon, IconsNames } from '@components/Icon';
import { Container, TextContent } from './styles';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  text: string;
  iconName?: IconsNames;
  type?: 'SOLID' | 'OUTLINE';
};

export function Button({
  text,
  iconName,
  type = 'SOLID',
  ...rest
}: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      {iconName && (
        <Icon
          name={iconName}
          size={18}
          color={type === 'SOLID' ? 'WHITE' : 'GRAY_1'}
        />
      )}
      <TextContent type={type}>{text}</TextContent>
    </Container>
  );
}
