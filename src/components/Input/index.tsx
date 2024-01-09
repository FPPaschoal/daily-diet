import { TextInputProps } from 'react-native';
import { Container, Input, Label } from './styles';

interface InputProps extends TextInputProps {
  label: string;
  style?: any;
}

export function InputComponent({ label, style, ...rest }: InputProps) {
  return (
    <Container style={style}>
      <Label>{label}</Label>
      <Input {...rest} />
    </Container>
  );
}
