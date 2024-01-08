import {
  ArrowUpRightIcon,
  Container,
  Header,
  Logo,
  PercentContainer,
  Title,
} from './styles';
import logoImg from '@assets/logo.png';
import { DataContainer } from '@components/DataContainer';
import { Text, View } from 'react-native';
import { Button } from '@components/Button';
import { DayList } from '@components/DayList';
import { Icon } from '@components/Icon';

export function Home() {
  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <Icon name="UserCircle" color="GRAY_1" size={40} />
      </Header>
      <DataContainer
        textData="90,86%"
        description="das refeições dentro da dieta"
      />
      <View>
        <Title>Refeições</Title>
        <Button iconName="Plus" text="Nova refeição" />
      </View>
      <DayList />
    </Container>
  );
}
