import { Container, Loading } from './styles';

type Props = {
  size?: number;
};

export function Loader({ size = 32 }: Props) {
  return (
    <Container>
      <Loading size={size} />
    </Container>
  );
}
