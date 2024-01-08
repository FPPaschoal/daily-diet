import { Icon } from '@components/Icon';
import { BackButton, Container, Subtitle, Title } from './styles';
import { useEffect } from 'react';

type Props = {
  type?: 'DEFAULT' | 'SUCCESS' | 'WARNING';
};

export function Header({ type = 'DEFAULT' }: Props) {
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

  return (
    <Container type={backgroundColor}>
      <BackButton>
        <Icon name="ArrowLeft" color={ArrowLeftColor} size={24} />
      </BackButton>
      <Title>90.86%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
