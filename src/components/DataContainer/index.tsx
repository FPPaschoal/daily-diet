import { StyleProp, ViewStyle } from 'react-native';
import { Container, Description, TextData } from './styles';

export type Props = {
  type?: 'DEFAULT' | 'SUCCESS' | 'WARNING';
  size?: 'MEDIUM' | 'LARGE';
  textData: string;
  description: string;
  style?: StyleProp<ViewStyle>;
};

export function DataContainer({
  type = 'DEFAULT',
  size = 'MEDIUM',
  textData,
  description,
  style,
}: Props) {
  function getBackgroundColor() {
    switch (type) {
      case 'DEFAULT':
        return 'GRAY_6';
      case 'SUCCESS':
        return 'GREEN_LIGHT';
      case 'WARNING':
        return 'RED_LIGHT';
    }
  }

  function getTextSize() {
    switch (size) {
      case 'MEDIUM':
        return 'XL';
      case 'LARGE':
        return 'XXL';
    }
  }

  return (
    <Container type={getBackgroundColor()} style={style}>
      <TextData size={getTextSize()}>{textData}</TextData>
      <Description>{description}</Description>
    </Container>
  );
}
