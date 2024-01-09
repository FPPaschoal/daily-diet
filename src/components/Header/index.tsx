import { Icon } from '@components/Icon';
import { BackButton, Container, Subtitle, Title } from './styles';

type Props = {
  type?: 'DEFAULT' | 'SUCCESS' | 'WARNING';
  size?: 'MEDIUM' | 'LARGE';
  title: string;
  subtitle?: string;
};

export function Header({
  type = 'DEFAULT',
  size = 'MEDIUM',
  title,
  subtitle,
}: Props) {
  let backgroundColor: 'GRAY_5' | 'GREEN_LIGHT' | 'RED_LIGHT' = 'GRAY_5';
  let ArrowLeftColor: 'GRAY_2' | 'GREEN_DARK' | 'RED_DARK' = 'GRAY_2';
  function getColors() {
    switch (type) {
      case 'DEFAULT':
        backgroundColor = 'GRAY_5';
        ArrowLeftColor = 'GRAY_2';
        return;
      case 'SUCCESS':
        backgroundColor = 'GREEN_LIGHT';
        ArrowLeftColor = 'GREEN_DARK';
        return;
      case 'WARNING':
        backgroundColor = 'RED_LIGHT';
        ArrowLeftColor = 'RED_DARK';
        return;
    }
  }

  getColors();

  function getSize() {
    switch (size) {
      case 'MEDIUM':
        return 'LG';
      case 'LARGE':
        return 'XXL';
    }
  }

  return (
    <Container type={backgroundColor}>
      <BackButton>
        <Icon name="ArrowLeft" color={ArrowLeftColor} size={24} />
      </BackButton>
      <Title size={getSize()}>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  );
}
